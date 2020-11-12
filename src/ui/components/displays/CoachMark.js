import * as React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const usePopoverStyles = makeStyles({
  paper: anchorOrigin => ({
    boxShadow: '0px 3px 10px #00000036',
    borderRadius: 10,
    backgroundColor: '#2980b9',
    maxWidth: '350px',
    marginTop: (anchorOrigin.vertical === 'top') ? '-20px' : '20px',
    overflowX: 'visible',
    overflowY: 'visible',
    '&::after': {
      content: '" "',
      position: 'absolute',
      right: (anchorOrigin.horizontal === 'right') ? '10px' : 'unset',
      top: (anchorOrigin.vertical === 'bottom') ? '-8px' : 'unset',
      left: (anchorOrigin.horizontal === 'left') ? '10px' : 'unset',
      bottom: (anchorOrigin.vertical === 'top') ? '-8px' : 'unset',
      borderTop: (anchorOrigin.vertical === 'top') ? '8px solid #FF5A5F' : 'none',
      borderRight: '8px solid transparent',
      borderLeft: '8px solid transparent',
      borderBottom: (anchorOrigin.vertical === 'bottom') ? '8px solid #FF5A5F' : 'none',
    }
  })
})

const textStyle = makeStyles(() => ({
  whiteText: {
    color: 'white'
  }
}))

function CoachMark(props) {
  const {
    anchorOrigin,
    description,
    anchorEl,
    open,
    closeCoachMark
  } = props
  const id = open ? 'simple-popover' : undefined
  const popoverStyles = usePopoverStyles(anchorOrigin)
  const classes = textStyle()

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={{
        vertical: (anchorOrigin.vertical === 'bottom') ? 'top' : 'bottom',
        horizontal: (anchorOrigin.horizontal === 'right') ? 'right' : 'left'
      }}
      onClose={() => closeCoachMark()}
      classes={popoverStyles}
    >
      <Box p={2} pb={1}>
        <Typography variant="body1" className={classes.whiteText}>{description}</Typography>
      </Box>
      <Box mt={1} p={2} pt={1}>
        <Button
          onClick={() => closeCoachMark()}
          style={{
            color: 'white',
            background: 'rgba(0,0,0, 0.1)'
          }}
        >
          GOT IT
        </Button>
      </Box>
    </Popover>
  )
}

export default CoachMark
