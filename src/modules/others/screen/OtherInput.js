import React from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  FormGroup,
  Grid,
  Slider,
  Typography
} from '@material-ui/core'
import {
  AlarmOutlined as CircleTickOutIcon,
  AlarmOffOutlined as CircleTickIcon,
} from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers'
import DashboardLayout from 'ui/layout/dashboardLayout'
import FormPaper from 'ui/components/FormPaper'
import FileUpload from 'ui/components/input/FileUpload'
import Switch from 'ui/components/input/Switch'
import Checkbox from 'ui/components/input/CustomCheckbox'
import { useForm } from 'utils'

function InputScreen() {
  const { values, setValue } = useForm({
    page: 'Boolean Inputs',
    switch: false,
    checkbox: false,
    customIcon: false,
    date: new Date('2014-08-18T21:11:54'),
    file: '',
    image: '',
    noMarkSlide: 30,
    markSlide: 30
  })

  return (
    <>
      <DashboardLayout>
        <Box px={15}>
          <FormPaper>
            <Box mb={2}>
              <Typography variant="h5">Other input components</Typography>
              <Typography variant="caption">Input components and validations</Typography>
            </Box>
            <Divider />
            <Typography variant="body1"><b>Button Group</b></Typography>
            <Box pt={1} display="flex" justifyContent="center">
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button
                  variant={values.page === 'Boolean Inputs' ? 'contained' : 'outlined'}
                  onClick={() => setValue('page', 'Boolean Inputs')}
                >
                  Boolean Inputs
                </Button>
                <Button
                  variant={values.page === 'DateTime Inputs' ? 'contained' : 'outlined'}
                  onClick={() => setValue('page', 'DateTime Inputs')}
                >
                  DateTime Inputs
                </Button>
                <Button
                  variant={values.page === 'File Upload Inputs' ? 'contained' : 'outlined'}
                  onClick={() => setValue('page', 'File Upload Inputs')}
                >
                  File Upload Inputs
                </Button>
                <Button
                  variant={values.page === 'Sliders' ? 'contained' : 'outlined'}
                  onClick={() => setValue('page', 'Sliders')}
                >
                  Sliders
                </Button>
              </ButtonGroup>
            </Box>
            <Divider />
            <Typography variant="body1"><b>{values.page}</b></Typography>
            <Box pt={1} display="flex" justifyContent="center">
              {values.page === 'Boolean Inputs' && (
                <FormGroup row>
                  <Switch
                    label="Switch"
                    name="switch"
                    color="primary"
                    checked={values.switch}
                    setValue={setValue}
                  />
                  <Checkbox
                    label="Checkbox"
                    name="checkbox"
                    color="primary"
                    checked={values.checkbox}
                    setValue={setValue}
                  />
                  <Checkbox
                    label="Custom Icon Checkbox"
                    name="customIcon"
                    color="primary"
                    checked={values.customIcon}
                    setValue={setValue}
                    icon={<CircleTickOutIcon />}
                    checkedIcon={<CircleTickIcon />}
                  />
                </FormGroup>
              )}
              {values.page === 'DateTime Inputs' && (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      inputVariant="outlined"
                      variant="inline"
                      format="dd/MM/yyyy"
                      label="Date Picker"
                      value={values.date}
                      onChange={e => setValue('date', e)}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                    <KeyboardTimePicker
                      disableToolbar
                      inputVariant="outlined"
                      variant="inline"
                      id="time-picker"
                      label="Time Picker"
                      value={values.date}
                      onChange={e => setValue('date', e)}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              )}
              {values.page === 'File Upload Inputs' && (
                <Grid container justify="space-around">
                  <FileUpload
                    name="file"
                    title="File upload"
                    accept="application/pdf"
                    handleDeleteFile={() => setValue('file', '')}
                    handleUpload={file => setValue('file', file.name)}
                    selectedFile={values.file}
                  />
                  <FileUpload
                    name="image"
                    title="Image upload"
                    accept="image/*"
                    handleDeleteFile={() => setValue('image', '')}
                    handleUpload={file => setValue('image', file.name)}
                    selectedFile={values.image}
                  />
                </Grid>
              )}
              {values.page === 'Sliders' && (
                <Box width="100%">
                  <Typography variant="body1">
                    Unmarked Slider
                  </Typography>
                  <Slider
                    value={values.noMarkSlide}
                    onChange={(e, v) => setValue('noMarkSlide', v)}
                    aria-labelledby="continuous-slider"
                    getAriaValueText={(text) => text}
                  />
                  <Typography variant="body1">
                    Marked Slider
                  </Typography>
                  <Slider
                    fullWidth
                    value={values.markSlide}
                    onChange={(e, v) => setValue('markSlide', v)}
                    aria-labelledby="discrete-slider"
                    getAriaValueText={(text) => text}
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={100}
                  />
                </Box>
              )}
            </Box>
            <Divider />
          </FormPaper>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default InputScreen
