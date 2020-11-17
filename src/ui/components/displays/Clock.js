import React from 'react'
import {
  Box,
  Typography
} from '@material-ui/core'
import {
  formatTime
} from 'utils'

function Clock({ text, now, int }) {
  return (
    <Box
      p={1}
      display="flex"
      border="1px solid #707070"
      borderRadius="4px"
    >
      <Typography variant="body1">{formatTime(now, text, int)}</Typography>
    </Box>
  )
}

export default Clock
