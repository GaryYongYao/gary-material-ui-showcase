import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Switch,
  Typography
} from '@material-ui/core'
import {
  Search as SearchIcon
} from '@material-ui/icons'
import DashboardLayout from 'ui/layout/dashboardLayout'
import FormPaper from 'ui/components/FormPaper'
import CoachMarkIcon from 'ui/components/displays/CoachMarkIcon'
import CoachMark from 'ui/components/displays/CoachMark'

const useStyles = makeStyles(() => ({
  inputRoot: {
    width: 500,
    paddingBottom: 10,
    paddingTop: 10,
  }
}))

function CoachmarkScreen() {
  const classes = useStyles()
  const [step, setStep] = useState(0)
  const [eleRef, setEleRef] = React.useState({})
  const divRef = useRef()
  const checkRef = useRef()
  const searchIcon = <SearchIcon />

  React.useEffect(() => {
    if (document.getElementById('coachAnchor')) {
      setEleRef(document.getElementById('coachAnchor'))
    }
    setStep(1)
  }, [])

  return (
    <>
      <DashboardLayout>
        <Box px={15}>
          <FormPaper>
            <Box mb={2}>
              <Typography variant="h5">Coachmarks</Typography>
              <Typography variant="caption">Coachmark component integration to guide users</Typography>
            </Box>
            <Divider />
            <Box mb={2}>
              <Typography variant="h6">Coachmarks on input</Typography>
            </Box>
            <Box mt={3} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ position: 'relative' }}>
              <FormControl>
                <Input
                  ref={divRef}
                  placeholder="Search Products In Your Store"
                  startAdornment={<InputAdornment position="start" id="search-bar">{searchIcon}</InputAdornment>}
                  classes={{ root: classes.inputRoot }}
                />
                <CoachMarkIcon
                  icon={searchIcon}
                  iconPosition="left"
                  cid="search"
                  title="Search"
                  description="Step 1 Coachmark"
                  anchorEl={divRef.current}
                  open={step === 1}
                  closeCoachMark={() => setStep(2)}
                />
              </FormControl>
            </Box>
            <Divider />
            <Box mb={2}>
              <Typography variant="h6">Coachmarks on icon button</Typography>
            </Box>
            <Box mt={3} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ position: 'relative' }}>
              <FormControl>
                <IconButton id="coachAnchor">
                  {searchIcon}
                </IconButton>
                <CoachMarkIcon
                  icon={searchIcon}
                  iconPosition="left"
                  cid="search2"
                  title="Search"
                  description="Step 2 Coachmark"
                  anchorEl={eleRef}
                  open={step === 2}
                  closeCoachMark={() => setStep(3)}
                />
              </FormControl>
            </Box>
            <Divider />
            <Box mb={2}>
              <Typography variant="h6">Coachmarks without icon</Typography>
            </Box>
            <Box mt={3} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ position: 'relative' }}>
              <FormControl>
                <Switch ref={checkRef} name="isAvailable" />
                <CoachMark
                  description="Step 3 Coachmark"
                  anchorEl={checkRef.current}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  open={step === 3}
                  closeCoachMark={() => setStep(0)}
                />
              </FormControl>
            </Box>
            <Divider />
            <Box mt={3} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{ position: 'relative' }}>
              <Button color="primary" variant="contained" onClick={() => setStep(1)}>
                Restart
              </Button>
            </Box>
            <Divider />
          </FormPaper>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default CoachmarkScreen
