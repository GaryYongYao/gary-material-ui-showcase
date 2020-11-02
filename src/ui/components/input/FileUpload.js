import React from 'react'
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@material-ui/core'
import {
  Clear as ClearIcon,
  Description as DocIcon,
  PhotoCamera as PhotoCameraIcon
} from '@material-ui/icons'

function FileUpload({
  name,
  fullWidth,
  title,
  accept,
  handleDeleteFile,
  handleUpload,
  selectedFile
}) {
  console.log(accept)
  return (
    <>
      <input
        accept={accept}
        id={`${name}-button-file`}
        type="file"
        onChange={e => handleUpload(e.target.files[0])}
        style={{ display: 'none' }}
      />
      <FormControl variant="outlined" fullWidth={fullWidth}>
        <InputLabel id="file-input">{title}</InputLabel>
        <OutlinedInput
          value={selectedFile}
          disabled
          labelWidth={100}
          endAdornment={
            selectedFile
              ? (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleDeleteFile()}>
                    <ClearIcon color="error" />
                  </IconButton>
                </InputAdornment>
              )
              : (
                <InputAdornment position="end">
                  <label htmlFor={`${name}-button-file`}>
                    <IconButton color="primary" aria-label="upload Agreement" component="span">
                      {accept === 'application/pdf' && <DocIcon />}
                      {accept === 'image/*' && <PhotoCameraIcon />}
                    </IconButton>
                  </label>
                </InputAdornment>
              )
          }
        />
      </FormControl>
    </>
  )
}

export default FileUpload
