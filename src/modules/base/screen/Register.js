import React from 'react'
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DashboardLayout from 'ui/layout/dashboardLayout'
import { useForm } from 'utils'
import FormPaper from 'ui/components/FormPaper'
import { userRoles, banks } from '../constant'

function RegisterScreen() {
  const newForm = {
    password: '',
    email: '',
    name: '',
    role: '',
    bank: []
  }
  const { values, setText, setValue, emptyState } = useForm(newForm)

  return (
    <>
      <DashboardLayout>
        <Box px={15}>
          <FormPaper>
            <Box mb={2}>
              <Typography variant="h5">Form components</Typography>
              <Typography variant="caption">Form components and validations</Typography>
            </Box>
            <ValidatorForm onSubmit={() => console.log('Submitted!')}>
              <TextValidator
                name="name"
                label="Text"
                variant="outlined"
                value={values.name}
                onChange={setText}
                validators={['required']}
                errorMessages={['This field cannot be empty']}
                fullWidth
              />
              <TextValidator
                name="email"
                label="Text with validation(Email)"
                variant="outlined"
                value={values.email}
                onChange={setText}
                validators={['required', 'isEmail']}
                errorMessages={['This field cannot be empty', 'Please insert a E-mail']}
                fullWidth
              />
              <TextValidator
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={setText}
                validators={['required']}
                errorMessages={['This field cannot be empty']}
                fullWidth
              />
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="role-options">Select</InputLabel>
                <Select
                  labelId="role-options"
                  name="role"
                  value={values.role}
                  onChange={setText}
                  label="Role"
                >
                  {userRoles.map(role => (
                    <MenuItem key={role} value={role}>{role}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Autocomplete
                multiple
                id="combo-box-demo"
                options={banks}
                value={values.bank || []}
                getOptionLabel={(option) => `${option}`}
                onChange={(e, v) => setValue('bank', v)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Autocomplete with multiple choices"
                    variant="outlined"
                  />
                )}
              />
              <Box width="100%" textAlign="right">
                <Grid container spacing={1}>
                  <Grid item sm={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      type="submit"
                      color="primary"
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item sm={6}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={() => emptyState(newForm)}
                      style={{ backgroundColor: '#FF5A5F' }}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </ValidatorForm>
          </FormPaper>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default RegisterScreen
