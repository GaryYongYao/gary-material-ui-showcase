import * as React from 'react'
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Popover,
  Radio,
  RadioGroup
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

function ButtonRadioPopover({ text, options, value, onChange, children }) {
  const classes = popoverStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

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
          <RadioGroup aria-label="date" name="dateRange" value={value} onChange={onChange}>
            {options.map((option, i) => (
              <>
                <FormControlLabel value={option} control={<Radio color="primary" />} label={option} />
                {i !== options.length - 1 && <Divider />}
              </>
            ))}
          </RadioGroup>
          {value === options[options.length - 1] && children}
        </FormControl>
      </Popover>
    </>
  )
}

export default ButtonRadioPopover
