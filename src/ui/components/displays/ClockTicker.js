import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme, color) => ({
  blinking: {
    color,
    animationName: '$blinkingText',
    animationDuration: '2s',
    animationIterationCount: 'infinite'
  },
  '@keyframes blinkingText': {
    '0%': {
      opacity: 1
    },
    '50%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  }
}))

const ClockTicker = ({ color }) => {
  const classes = useStyles(color)

  return (
    <span
      style={{ color }}
      className={classes.blinking}
    >
      :
    </span>
  )
}

export default ClockTicker
