import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Box from '@material-ui/core/Box'
import Menu from '@material-ui/core/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import {
  Notifications as NotificationsIcon
} from '@material-ui/icons'
import { notifications } from '../../constant'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}))

const CustomListItem = ({ item, i, handleMouseOver }) => {
  const [unread, setUnread] = React.useState(item.unread)

  return (
    <Box
      style={{ cursor: 'pointer' }}
      onClick={() => {
        setUnread(false)
        handleMouseOver(i)
      }}
    >
      <ListItem
        style={{
          background: unread ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
        }}
      >
        <ListItemText primary={item.msg} />
      </ListItem>
    </Box>
  )
}

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [items, setItems] = React.useState(notifications)
  const classes = useStyles()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleMouseOver = (i) => {
    const copy = notifications
    copy[i].unread = false
    setItems(copy)
  }

  return (
    <>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="text"
        style={{ color: 'white' }}
        onClick={handleClick}
      >
        <Badge badgeContent={items.filter(i => i.unread).length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <List className={classes.root} subheader={<li />}>
          <li className={classes.listSection}>
            <ul className={classes.ul}>
              {items.map((item, i) => (
                <div key={`item-${item.id}`}>
                  <CustomListItem item={item} i={i} handleMouseOver={handleMouseOver} />
                  {(i + 1 !== items.length) && <Box width="100%" height="1px" borderBottom="#BEBEBE" />}
                </div>
              ))}
            </ul>
          </li>
        </List>
      </StyledMenu>
    </>
  )
}
