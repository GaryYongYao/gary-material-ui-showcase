import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: 'unset'
    },
  },
  close: {
    padding: theme.spacing(2),
  }
}))

function PopupAlert({ btn, title, text }) {
  const classes = useStyles()
  const [alert, setAlert] = useState(false)

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setAlert(true)}
      >
        {btn}
      </Button>
      <Modal open={alert} onClose={() => setAlert(!alert)} style={{ zIndex: 9999 }}>
        <Box className={classes.paper}>
          <Box position="relative">
            <Box textAlign="right">
              <IconButton
                key="close"
                aria-label="close"
                className={classes.close}
                onClick={() => setAlert(!alert)}
              >
                <CloseIcon style={{ color: '#FF5A5F' }} />
              </IconButton>
            </Box>
            <Box textAlign="center">
              <Box mb={1}>
                <Typography variant="subtitle1">{title}</Typography>
              </Box>
              <Box mb={3} p={2}>
                <Typography variant="body1">{text}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default PopupAlert
