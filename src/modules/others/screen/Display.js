import React, { useEffect, useState } from 'react'
import {
  Box,
  Divider,
  FormControlLabel,
  Switch,
  Typography
} from '@material-ui/core'
import timezone from 'moment-timezone'
import DashboardLayout from 'ui/layout/dashboardLayout'
import FormPaper from 'ui/components/FormPaper'
import Clock from 'ui/components/displays/Clock'
import CountdownClock from 'ui/components/displays/CountdownClock'
import CountdownIndi from 'ui/components/displays/CountdownIndi'
import CountdownProgress from 'ui/components/displays/CountdownProgress'
import SquaredText from 'ui/components/displays/SquaredText'
import StatusItem from 'ui/components/displays/StatusItem'
import TimezoneSelection from 'ui/components/input/TimezoneSelection'

function DisplayScreen() {
  const [now, setNow] = useState(Date.now() / 1000)
  const [extraTimezone, setExtraTimezone] = useState('America/New_York')
  const [int, setInt] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setNow(now + 1)
    }, 1000)
  }, [now])

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
              <Box><CountdownClock due={7199} color="#FF5A5F" /></Box>
              <Box><CountdownIndi due={7199} /></Box>
              <Box><CountdownProgress due={7199} totalCutOff={7200} /></Box>
            </Box>
            <Divider />
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="body1"><b>Clocks</b></Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={int}
                    onChange={() => setInt(!int)}
                    name="international"
                    color="primary"
                  />
                }
                label="International Time"
              />
            </Box>
            <Box
              pt={1}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Clock
                now={now}
                int={int}
                text={timezone.tz.guess(true)}
              />
              <Box
                display="flex"
                justifyContent="space-around"
                width="500px"
                alignItems="center"
              >
                <Box width="200px">
                  <TimezoneSelection zone={extraTimezone} setZone={setExtraTimezone} />
                </Box>
                <Clock
                  now={now}
                  int={int}
                  text={extraTimezone}
                />
              </Box>
            </Box>
            <Divider />
            <Typography variant="body1"><b>Descriptive Components</b></Typography>
            <Box
              pt={1}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <SquaredText text="Text Data" color="#2ecc71" />
              <StatusItem text="Status Data" color="#2ecc71" />
              <StatusItem text="Status" color="#2ecc71" status="Data Text" />
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
