import React from 'react'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const usePopoverStyles = makeStyles(theme => ({
  paper: {
    boxShadow: '0px 3px 10px #00000036',
    borderRadius: 10,
    backgroundColor: '#2980b9',
    maxWidth: '400px',
    display: 'flex',
    alignItems: 'center',
    '& .animatedCircle': {
      animation: `$breathingCircle 3s ${theme.transitions.easing.easeOut} infinite normal`
    },
  },
  '@keyframes breathingCircle': {
    '0%': {
      transform: 'scale(1.3)'
    },
    '25%': {
      transform: 'scale(1.5)'
    },
    '60%': {
      transform: 'scale(1.3)'
    },
    '100%': {
      transform: 'scale(1.3)'
    }
  }
}))

const textStyle = makeStyles(() => ({
  whiteText: {
    color: 'white'
  }
}))

const CoachMarkIcon = (props) => {
  const {
    anchorEl,
    icon,
    iconPosition,
    cid,
    description,
    title,
    open,
    closeCoachMark
  } = props
  const id = open ? `coach-${cid}-popover` : undefined
  const popoverStyles = usePopoverStyles()
  const classes = textStyle()

  React.useEffect(() => console.log(anchorEl))

  const renderIconFocus = () => (
    <Box
      p={4}
      ml={iconPosition === 'left' ? 4 : 0}
      mr={iconPosition === 'right' ? 2 : 0}
      position="relative"
    >
      <Box
        className="animatedCircle"
        width="50px"
        height="50px"
        borderRadius="50%"
        top={0}
        left={0}
        position="absolute"
        bgcolor="rgba(255,255,255, 0.3)"
      />
      <Box
        className="contentCircle"
        width="50px"
        height="50px"
        borderRadius="50%"
        top={0}
        left={0}
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#FAFAFA"
      >
        {icon}
      </Box>
    </Box>
  )

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'center',
        horizontal: -42
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      onClose={() => closeCoachMark()}
      classes={popoverStyles}
    >
      {iconPosition === 'left' && renderIconFocus()}
      <Box ml={2}>
        <Box p={2} pb={1}>
          <Typography variant="h6" className={classes.whiteText}>{title}</Typography>
        </Box>
        <Box p={2} pt={1} pb={1}>
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
      </Box>
      {iconPosition === 'right' && renderIconFocus()}
    </Popover>
  )
}

export default CoachMarkIcon
