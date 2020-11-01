import React from 'react'
import {
  Build as RepairIcon,
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
  { text: 'Services' },
  { icon: <RepairIcon />, text: 'Refurbishment', link: '/refurbishment' },
  { divider: true, text: 'divider2' },
  { text: 'Inputs' },
  { icon: <FormIcon />, text: 'Form', link: '/form' },
  { icon: <InputIcon />, text: 'Other Inputs', link: '/other-input' },
  { divider: true, text: 'divider2' },
  { text: 'Others' },
  { icon: <NotFoundIcon />, text: 'Error', link: '/404' }
]
