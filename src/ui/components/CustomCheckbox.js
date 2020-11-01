import React from 'react'
import {
  FormControlLabel,
  Checkbox
} from '@material-ui/core'

export default function CustomCheckbox({ name, label, setValue, ...props }) {
  const onChange = e => {
    setValue(name, e.target.checked)
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          onChange={onChange}
          {...props}
        />
      }
      label={label}
    />
  )
}
