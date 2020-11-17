import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { twoDigit, getHours, getMins, getSecs } from 'utils'

const useStyle = makeStyles((theme) => ({
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    position: 'absolute',
    left: 0,
  }
}))

const CountdownProgress = ({ due, totalCutOff }) => {
  const classes = useStyle()
  const [countdown, setCountdown] = useState(due)

  useEffect(() => {
    setTimeout(() => {
      if (countdown > 0) setCountdown(countdown - 1)
    }, 1000)
  }, [countdown])

  const progress = () => (countdown > 0
    ? 100 - ((countdown / totalCutOff) * 100)
    : 100
  )

  return (
    <Box position="relative">
      {countdown > 0 && (
        <Box
          position="absolute"
          top="18px"
          left="25px"
          height="55px"
          display="flex"
          alignItems="center"
        >
          <Typography
            variant="caption"
            style={{
              color: '#FF5A5F',
              fontWeight: 800
            }}
          >
            {getHours(countdown) > 0 ? (
              <>
                {`${twoDigit(getHours(countdown))} hr`}
                <br />
              </>
            ) : ''}
            {getMins(countdown) > 0 ? (
              <>
                {`${twoDigit(getMins(countdown))} min`}
                <br />
              </>
            ) : ''}
            {`${twoDigit(getSecs(countdown))} sec`}
          </Typography>
        </Box>
      )}
      {countdown <= 0 && (
        <Box
          position="absolute"
          top="35px"
          left="22px"
        >
          <Box>Expired</Box>
        </Box>
      )}
      <CircularProgress
        variant="static"
        className={classes.bottom}
        size={90}
        value={100}
      />
      <CircularProgress
        variant="static"
        disableShrink
        color="secondary"
        className={classes.top}
        value={progress()}
        size={90}
      />
    </Box>
  )
}

export default CountdownProgress
