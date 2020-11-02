import React from 'react'
import {
  FlipToFront as FeedbackIcon,
  Dashboard as DashboardIcon,
  ListAlt as FormIcon,
  Error as NotFoundIcon,
  Input as InputIcon
} from '@material-ui/icons'

export const options = {
  pageSize: 10,
  pageSizeOptions: [10, 25, 50],
  filtering: true,
  actionsColumnIndex: -1,
  sorting: true
}

export const menu = [
  { text: 'Dashboard components' },
  { icon: <DashboardIcon />, text: 'Dashboard', link: '/' },
  { divider: true, text: 'divider1' },
  { text: 'Screens' },
  { icon: <FormIcon />, text: 'Form', link: '/form' },
  { divider: true, text: 'divider2' },
  { text: 'Other Screens' },
  { icon: <NotFoundIcon />, text: 'Error', link: '/404' },
  { divider: true, text: 'divider3' },
  { text: 'Other Components' },
  { icon: <InputIcon />, text: 'Other Inputs', link: '/other-input' },
  { icon: <FeedbackIcon />, text: 'Feedback', link: '/other-input' }
]
