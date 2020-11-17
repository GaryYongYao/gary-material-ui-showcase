import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { twoDigit, getHours, getMins, getSecs } from 'utils'
import ClockTicker from './ClockTicker'

const CountdownClock = ({ due, color }) => {
  const [countdown, setCountdown] = useState(due)

  useEffect(() => {
    setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)
  }, [countdown])

  return (
    <Typography variant="body1" style={{ color }}>
      <b>
        {getHours(countdown) > 0 ? (
          <>
            {`${twoDigit(getHours(countdown))} `}
            <ClockTicker color={color} />
          </>
        ) : ''}
        {getMins(countdown) > 0 ? (
          <>
            {` ${twoDigit(getMins(countdown))} `}
            <ClockTicker color={color} />
          </>
        ) : ''}
        {` ${twoDigit(getSecs(countdown))}`}
      </b>
    </Typography>
  )
}

export default CountdownClock
