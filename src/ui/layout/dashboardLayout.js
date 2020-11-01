import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Box,
  Drawer,
  Divider,
  IconButton,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon
} from '@material-ui/icons'
import { useRoutes } from 'utils'
import { UserContext } from 'utils/sessions'
import { menu } from '../constant'
import UserDropdownMenu from '../components/UserDropdownMenu'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: '#F0F0F0'
  },
  layerOverlay: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    paddingTop: '36px'
  },
  contentStyle: {
    margin: '0 auto',
    width: '80%',
    position: 'relative'
  }
}))

const DashLayout = ({ children }) => {
  const { menuButton, title, layerOverlay, contentStyle } = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const { history } = useRoutes()
  const { userRole } = useContext(UserContext)

  const renderListItems = (e) => {
    if (e.divider) {
      return <Divider key={e.text} />
    }
    if (e.link) {
      return (
        <ListItem
          button
          key={e.text}
          onClick={() => history.push({ pathname: e.link })}
        >
          <ListItemIcon>{e.icon}</ListItemIcon>
          <ListItemText primary={e.text} />
        </ListItem>
      )
    }
    return (
      <ListItem key={e.text}>
        <ListItemText primary={e.text} />
      </ListItem>
    )
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid container item xs={11} alignItems="center">
              <IconButton
                edge="start"
                className={menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MenuIcon />
              </IconButton>
              <Hidden only="xs">
                <Typography variant="h6" className={title}>
                  Gary&apos;s Material UI Showcase
                </Typography>
              </Hidden>
            </Grid>
            <Grid container item xs={1} justify="flex-end">
              <IconButton style={{ color: 'white' }}>
                <NotificationsIcon />
              </IconButton>
              <UserDropdownMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Box width="250px">
          <List>
            {menu.map(e => (
              (!e.admin || (e.admin && userRole === 'Admin'))
              && renderListItems(e)
            ))}
          </List>
        </Box>
      </Drawer>
      <Box>
        <Box className={layerOverlay}>
          <Box className={contentStyle}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default DashLayout
