import { useState } from 'react'
import { useParams, useLocation, useHistory } from 'react-router'
import qs from 'qs'

function useRoutes() {
  const params = useParams()
  const location = useLocation()
  const history = useHistory()
  const query = qs.parse(location.search, { ignoreQueryPrefix: true })

  return {
    params,
    location,
    history,
    query,
  }
}

const useForm = initialValue => {
  const [values, setValues] = useState(initialValue)

  return {
    values,
    setValue: (name, value) => {
      setValues({
        ...values,
        [name]: value
      })
    },
    setAll: v => {
      setValues({
        ...v
      })
    },
    emptyState: emptyState => {
      setValues(emptyState)
    }
  }
}

export {
  useForm,
  useRoutes
}
