import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from 'ui/theme'
import {
  DashboardScreen
} from 'modules/dashboard'
import { CustomSnackbar, SnackbarContextProvider } from 'ui/components/Snackbar'
import { UserContextProvider } from 'utils/sessions'
import NotFoundScreen from './screen/404'
import RegisterScreen from './screen/Register'
import InputScreen from './screen/OtherInput'

import './App.css'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarContextProvider>
        <div className="container">
          <BrowserRouter>
            <UserContextProvider>
              <Switch>
                <Route exact path="/form" component={RegisterScreen} />
                <Route exact path="/other-input" component={InputScreen} />
                <Route exact path="/" component={DashboardScreen} />
                <Route component={NotFoundScreen} />
              </Switch>
            </UserContextProvider>
          </BrowserRouter>
        </div>
        <CustomSnackbar />
      </SnackbarContextProvider>
    </MuiThemeProvider>
  )
}

export default App
