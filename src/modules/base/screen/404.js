import React from 'react'
import { Box, Typography } from '@material-ui/core'
import DashboardLayout from 'ui/layout/dashboardLayout'
import NotFoundImg from 'ui/resources/img/404.png'

function NotFoundScreen() {
  return (
    <>
      <DashboardLayout noDrawer>
        <Box
          height="100%"
          position="relative"
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography variant="h3">404: The page you are looking for isn’t here</Typography>
            <Typography variant="body1">You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation</Typography>
            <img src={NotFoundImg} />
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default NotFoundScreen
