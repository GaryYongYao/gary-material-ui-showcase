import React, { useContext } from 'react'
import * as Cookies from 'js-cookie'
import request from 'utils/request'
import { SnackbarContext } from 'ui/components/feedback/Snackbar'
import { useRoutes } from 'utils'

export const setSessionCookie = session => {
  Cookies.remove('session')
  Cookies.set('session', session, { expires: 6 })
}

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get('session')

  if (sessionCookie === undefined) return {}

  return JSON.parse(sessionCookie)
}

export const removeLogin = () => {
  Cookies.remove('session')
}

// user context
export const UserContextProvider = ({ children }) => {
  const [userContext, setUserContext] = React.useState(getSessionCookie())
  const { openSnackbar } = useContext(SnackbarContext)
  const { history } = useRoutes()

  const checkAdminRoute = path => {
    const adminRoutes = [
      { path: '/users', goto: '/dashboard' },
      { path: '/supplier-add', goto: '/supplier' }
    ]

    adminRoutes.forEach(route => {
      if (path === route.path) {
        history.push({ pathname: route.goto })
        openSnackbar(
          'You do not have access',
          'error'
        )
      }
    })
  }

  const userValue = {
    userContext,
    userRole: (userContext.user || {}).role,
    login: (user, password) => {
      request('GET', '/api/auth', { user, password })
        .then(res => {
          openSnackbar(
            res.data.message || res.data.error,
            res.data.error ? 'error' : 'success'
          )
          if (res.data.message) {
            setSessionCookie({ user: res.data.user })
            setUserContext({ user: res.data.user })
            history.push({ pathname: '/dashboard' })
          }
        })
    },
    checkLogin: () => {
      if (userContext.user === undefined) {
        history.push({ pathname: '/' })
      } else if (history.location.pathname === '/') {
        history.push({ pathname: '/dashboard' })
      } else if (userContext.user.role !== 'Admin') {
        checkAdminRoute(history.location.pathname)
      }
    },
    logout: () => {
      setUserContext({})
      removeLogin()
      history.push({ pathname: '/' })
    }
  }

  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  )
}

export const UserContext = React.createContext()
