import React from 'react'
import {
  Box,
  Divider,
  FormGroup,
  Typography
} from '@material-ui/core'
import {
  AlarmOutlined as CircleTickOutIcon,
  AlarmOffOutlined as CircleTickIcon,
} from '@material-ui/icons'
import DashboardLayout from 'ui/layout/dashboardLayout'
import FormPaper from 'ui/components/FormPaper'
import Switch from 'ui/components/Switch'
import Checkbox from 'ui/components/CustomCheckbox'
import { useForm } from 'utils'

function InputScreen() {
  const { values, setValue } = useForm({
    switch: false,
    checkbox: false,
    customIcon: false
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
            <Typography variant="body1"><b>Boolean Inputs</b></Typography>
            <Box pt={1} display="flex" justifyContent="center">
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
            </Box>
            <Divider />
          </FormPaper>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default InputScreen
