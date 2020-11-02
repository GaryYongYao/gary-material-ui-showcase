import React from 'react'
import {
  FormControlLabel,
  Switch
} from '@material-ui/core'

export default function CustomSwitch({ name, label, setValue, ...props }) {
  const onCheckbox = e => {
    setValue(name, e.target.checked)
  }

  return (
    <FormControlLabel
      control={
        <Switch
          onChange={onCheckbox}
          name={name}
          {...props}
        />
      }
      label={label}
    />
  )
}
