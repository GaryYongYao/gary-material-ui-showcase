import React from 'react'
import {
  Button,
  Tooltip
} from '@material-ui/core'

function TooltipButton({ btnText, tooltip, placement }) {
  return (
    <Tooltip title={tooltip} placement={placement}>
      <Button color="primary" variant="contained">{btnText}</Button>
    </Tooltip>
  )
}

export default TooltipButton
