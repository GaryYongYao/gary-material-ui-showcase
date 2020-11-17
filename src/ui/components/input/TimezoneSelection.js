import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import timezone from 'moment-timezone'

function TimezoneSelection({ zone, setZone }) {
  // existed timezone cannot be selected
  const clearExistZone = (option) => {
    let isNotSelected = true
    if (
      option === timezone.tz.guess(true)
      || option === zone
    ) isNotSelected = false
    return isNotSelected
  }
  const zoneOptions = timezone.tz.names().filter(clearExistZone)

  return (
    <Autocomplete
      id="combo-box-demo"
      options={zoneOptions}
      value={zone}
      getOptionLabel={(option) => option}
      onChange={(e, v) => setZone(v)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Timezone"
        />
      )}
    />
  )
}

export default TimezoneSelection
