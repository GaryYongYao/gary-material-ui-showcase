import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getHours, getMins, getSecs } from 'utils'

const useStyle = makeStyles((theme) => ({
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    position: 'absolute',
    left: 0,
  }
}))

const CountdownIndi = ({ due }) => {
  const classes = useStyle()
  const [countdown, setCountdown] = useState(due)

  useEffect(() => {
    setTimeout(() => {
      if (countdown > 0) setCountdown(countdown - 1)
    }, 1000)
  }, [countdown])

  const hrProgress = () => (countdown > 0
    ? 100 - ((getHours(countdown) / 24) * 100)
    : 100
  )

  const minProgress = () => (countdown > 0
    ? 100 - ((getMins(countdown) / 60) * 100)
    : 100
  )

  const secProgress = () => (countdown > 0
    ? 100 - ((getSecs(countdown) / 60) * 100)
    : 100
  )

  return (
    <Box display="flex">
      {countdown > 0 && (
        <>
          {getHours(countdown) > 0 && (
            <Box position="relative" pr={1}>
              <Box
                position="absolute"
                top="20px"
                left="21px"
                color="#707070"
                style={{ fontWeight: 800, textAlign: 'center' }}
              >
                <Box>{getHours(countdown)}</Box>
                <Box>Hour</Box>
              </Box>
              <CircularProgress
                variant="static"
                className={classes.bottom}
                size={80}
                value={100}
              />
              <CircularProgress
                variant="static"
                disableShrink
                className={classes.top}
                value={hrProgress()}
                size={80}
              />
            </Box>
          )}
          {(getMins(countdown) > 0 || getHours(countdown) > 0) && (
            <Box position="relative" pr={1}>
              <Box
                position="absolute"
                top="20px"
                left="13px"
                color="#707070"
                style={{ fontWeight: 800, textAlign: 'center' }}
              >
                <Box>{getMins(countdown)}</Box>
                <Box>Minutes</Box>
              </Box>
              <CircularProgress
                variant="static"
                className={classes.bottom}
                size={80}
                value={100}
              />
              <CircularProgress
                variant="static"
                disableShrink
                className={classes.top}
                value={minProgress()}
                size={80}
              />
            </Box>
          )}
          <Box position="relative">
            <Box
              position="absolute"
              top="20px"
              left="13px"
              color="#707070"
              style={{ fontWeight: 800, textAlign: 'center' }}
            >
              <Box>{getSecs(countdown)}</Box>
              <Box>Seconds</Box>
            </Box>
            <CircularProgress
              variant="static"
              className={classes.bottom}
              size={80}
              value={100}
            />
            <CircularProgress
              variant="static"
              disableShrink
              className={classes.top}
              value={secProgress()}
              size={80}
            />
          </Box>
        </>
      )}
      {countdown <= 0 && (
        <Box position="relative">
          <Box
            position="absolute"
            top="28px"
            left="11px"
            color="#FF5A5F"
            style={{ fontWeight: 800 }}
          >
            <Box>Expired</Box>
          </Box>
          <CircularProgress
            variant="static"
            className={classes.bottom}
            size={80}
            value={100}
          />
          <CircularProgress
            variant="static"
            disableShrink
            color="secondary"
            className={classes.top}
            value={100}
            size={80}
          />
        </Box>
      )}
    </Box>
  )
}

export default CountdownIndi
