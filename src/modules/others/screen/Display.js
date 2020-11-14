import React from 'react'
import {
  Box,
  Divider,
  Typography
} from '@material-ui/core'
import DashboardLayout from 'ui/layout/dashboardLayout'
import FormPaper from 'ui/components/FormPaper'
import CountdownClock from 'ui/components/displays/CountdownClock'
import CountdownIndi from 'ui/components/displays/CountdownIndi'
import CountdownProgress from 'ui/components/displays/CountdownProgress'

function DisplayScreen() {
  return (
    <>
      <DashboardLayout>
        <Box px={15}>
          <FormPaper>
            <Box mb={2}>
              <Typography variant="h5">Display components</Typography>
              <Typography variant="caption">Data display components</Typography>
            </Box>
            <Divider />
            <Typography variant="body1"><b>Countdown Clock</b></Typography>
            <Box
              pt={1}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Box><CountdownClock due={7200} color="#FF5A5F" /></Box>
              <Box><CountdownIndi due={7200} /></Box>
              <Box><CountdownProgress due={7200} totalCutOff={7200} /></Box>
            </Box>
            <Divider />
            <Typography variant="body1"><b>Skeleton</b></Typography>
            <Box pt={1} display="flex" justifyContent="center">
              Skeleton
            </Box>
            <Divider />
          </FormPaper>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default DisplayScreen
