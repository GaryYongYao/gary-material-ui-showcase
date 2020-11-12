import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: 'unset'
    },
  },
  button: {
    width: '50%',
    padding: theme.spacing(2),
    cursor: 'pointer'
  },
}))

function AlertConfirm({ btn, title, text, confirmClick }) {
  const [alert, setAlert] = useState(false)
  const classes = useStyles()

  const onModalClose = () => {
    setAlert(!alert)
  }

  const onModalConfirmed = () => {
    setAlert(!alert)
    confirmClick()
  }

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setAlert(true)}
      >
        {btn}
      </Button>
      <Modal open={alert} onClose={onModalClose} style={{ zIndex: 9999 }}>
        <Box className={classes.paper}>
          <Box mt="35px" textAlign="center">
            <Box mb={1}>
              <Typography variant="subtitle1">{title}</Typography>
            </Box>
            <Box mb={3} p={2}>
              <Typography variant="body1">{text}</Typography>
            </Box>
          </Box>
          <Box display="flex" textAlign="center" borderTop="1px solid #C6C6C6">
            <Box className={classes.button} borderRight="1px solid #C6C6C6" onClick={onModalConfirmed}>
              <Typography variant="body1" color="error"><b>CONFIRM</b></Typography>
            </Box>
            <Box className={classes.button} onClick={() => setAlert(!alert)}>
              <Typography variant="body1"><b>CANCEL</b></Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default AlertConfirm
