import React from 'react'
import Button from '@material-ui/core/Button'
import {
  FlipToFront as FeedbackIcon,
  Dashboard as DashboardIcon,
  ListAlt as FormIcon,
  Accessibility as CoachmarkIcon,
  Error as NotFoundIcon,
  Input as InputIcon,
  ArtTrack as DisplayIcon
} from '@material-ui/icons'

export const options = {
  pageSize: 10,
  pageSizeOptions: [10, 25, 50],
  filtering: true,
  actionsColumnIndex: -1,
  sorting: true
}

export const notifications = [
  { id: 1, unread: true, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
  { id: 2, unread: true, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
  { id: 3, unread: false, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
  { id: 4, unread: false, msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' }
]

export const snackbar = [
  (openSnackbar) => (
    <Button
      key="1"
      color="primary"
      style={{
        width: '100px'
      }}
      onClick={() => openSnackbar('This is info', 'info')}
    >
      Info
    </Button>
  ),
  (openSnackbar) => (
    <Button
      key="2"
      style={{
        background: '#12a340',
        color: 'white',
        width: '100px'
      }}
      onClick={() => openSnackbar('Successful', 'success')}
    >
      Success
    </Button>
  ),
  (openSnackbar) => (
    <Button
      key="3"
      style={{
        background: '#ff9800',
        color: 'white',
        width: '100px'
      }}
      onClick={() => openSnackbar('Warning!', 'warning')}
    >
      Warning
    </Button>
  ),
  (openSnackbar) => (
    <Button
      key="4"
      color="secondary"
      style={{
        width: '100px'
      }}
      onClick={() => openSnackbar('Error!', 'error')}
    >
      Error
    </Button>
  )
]

export const menu = [
  { text: 'Dashboard components' },
  { icon: <DashboardIcon />, text: 'Dashboard', link: '/' },
  { divider: true, text: 'divider1' },
  { text: 'Screens' },
  { icon: <FormIcon />, text: 'Form', link: '/form' },
  { icon: <CoachmarkIcon />, text: 'Coachmarks', link: '/coachmark' },
  { icon: <NotFoundIcon />, text: 'Error', link: '/404' },
  { divider: true, text: 'divider2' },
  { text: 'Other Components' },
  { icon: <InputIcon />, text: 'Other Inputs', link: '/other-input' },
  { icon: <DisplayIcon />, text: 'Display', link: '/display' },
  { icon: <FeedbackIcon />, text: 'Feedback', link: '/feedback' }
]
