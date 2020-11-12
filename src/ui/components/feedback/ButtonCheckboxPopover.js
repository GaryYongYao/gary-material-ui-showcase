import * as React from 'react'
import {
  Button,
  FormGroup,
  FormControl,
  FormControlLabel,
  Popover,
  Checkbox,
  FormHelperText
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const popoverStyles = makeStyles(theme => ({
  paper: {
    borderRadius: 5,
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    minWidth: '250px'
  }
}))

function ButtonCheckboxPopover({ text, options/* , onChange */ }) {
  const classes = popoverStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  /* const findObject = (o, name) => name === o.name

  const handleChange = (name) => {
    const newOption = options
    const nameIndex = options.findIndex(o => findObject(o, name))

    newOption[nameIndex].checked = !newOption[nameIndex].checked
    onChange(newOption)
  } */

  return (
    <>
      <Button
        variant="outlined"
        style={{ background: '#FFFFFF', borderRadius: 0, marginRight: '5px' }}
        component="span"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {text}
      </Button>
      <Popover
        id={id}
        open={open}
        classes={{ paper: classes.paper }}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <FormControl fullWidth component="fieldset">
          <FormGroup>
            {options.map(o => (
              <FormControlLabel
                control={<Checkbox color="primary" name={o.name} />}
                label={o.name}
              />
            ))}
          </FormGroup>
          <FormHelperText
            style={{
              cursor: 'pointer',
              paddingLeft: '5px',
              paddingTop: '15px'
            }}
          >
            Clear
          </FormHelperText>
        </FormControl>
      </Popover>
    </>
  )
}

export default ButtonCheckboxPopover
