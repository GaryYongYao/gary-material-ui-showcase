import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from 'ui/theme'
import {
  DashboardScreen
} from 'modules/dashboard'
import {
  InputScreen,
  DisplayScreen,
  FeedbackScreen
} from 'modules/others'
import { CustomSnackbar, SnackbarContextProvider } from 'ui/components/feedback/Snackbar'
import { UserContextProvider } from 'utils/sessions'
import NotFoundScreen from 'modules/screens/screen/404'
import RegisterScreen from 'modules/screens/screen/Register'
import CoachmarkScreen from 'modules/screens/screen/Coachmarks'

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
                <Route exact path="/feedback" component={FeedbackScreen} />
                <Route exact path="/display" component={DisplayScreen} />
                <Route exact path="/coachmark" component={CoachmarkScreen} />
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
