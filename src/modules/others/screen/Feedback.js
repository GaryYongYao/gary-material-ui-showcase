import React, { useContext } from 'react'
import {
  Box,
  ButtonGroup,
  Divider,
  Typography
} from '@material-ui/core'
import DashboardLayout from 'ui/layout/dashboardLayout'
import FormPaper from 'ui/components/FormPaper'
import { SnackbarContext } from 'ui/components/feedback/Snackbar'
import AlertConfirm from 'ui/components/feedback/AlertConfirm'
import PopupContent from 'ui/components/feedback/PopupContent'
import ButtonPopover from 'ui/components/feedback/PopoverButton'
import TooltipButton from 'ui/components/feedback/TooltipButton'
import { snackbar } from 'ui/constant'

function FeedbackScreen() {
  const { openSnackbar } = useContext(SnackbarContext)

  return (
    <>
      <DashboardLayout>
        <Box px={15}>
          <FormPaper>
            <Box mb={2}>
              <Typography variant="h5">Feedback components</Typography>
              <Typography variant="caption">Feedback components</Typography>
            </Box>
            <Divider />
            <Typography variant="body1"><b>Snackbar</b></Typography>
            <Typography variant="caption">Integrated with React Context</Typography>
            <Box pt={1} display="flex" justifyContent="center">
              <ButtonGroup variant="contained">
                {snackbar.map(renderSnackbar => renderSnackbar(openSnackbar))}
              </ButtonGroup>
            </Box>
            <Divider />
            <Typography variant="body1"><b>Alerts</b></Typography>
            <Box pt={1} display="flex" justifyContent="space-around">
              <PopupContent
                btn="open content"
                title="Popup Alert Notification"
                text="Click on the actions to close"
              />
              <AlertConfirm
                btn="open confirmation"
                title="Alert Confirmation Box"
                text="Click on the actions to close"
                confirmClick={() => console.log('close modal')}
              />
            </Box>
            <Divider />
            <Typography variant="body1"><b>Button Feedback</b></Typography>
            <Box pt={1} display="flex" justifyContent="space-around">
              <TooltipButton
                btnText="Tooltip"
                tooltip="Tooltip Content"
                placement="top"
              />
              <ButtonPopover popId="simple-pop" msg="The content of the Popover." />
            </Box>
            <Divider />
          </FormPaper>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default FeedbackScreen
