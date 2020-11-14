import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { formatCountdown } from 'utils'

const CountdownClock = ({ due, color }) => {
  const [countdown, setCountdown] = useState(due)

  useEffect(() => {
    setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)
  }, [countdown])

  return <Typography variant="body1" style={{ color }}><b>{formatCountdown(countdown)}</b></Typography>
}

export default CountdownClock
