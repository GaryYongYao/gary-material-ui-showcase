import React/* , { useContext } */ from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import DashboardLayout from 'ui/layout/dashboardLayout'
// import { SnackbarContext } from 'ui/components/feedback/Snackbar'
import { useRoutes } from 'utils'

function DashboardScreen() {
  const { history } = useRoutes()
  // const { snackbarContext, setSnackbarContext } = useContext(SnackbarContext)
  const menu = [
    { text: 'Form', link: '/form' },
    { text: 'Coachmark', link: '/coachmark' },
    { text: 'Inputs', link: '/other-input' },
    { text: 'Display Component', link: '/display' },
    { text: 'Feedback Component', link: '/feedback' },
  ]

  return (
    <>
      <DashboardLayout>
        <Box p={3} position="relative" border="1px solid #AEAEAE" borderRadius="10px">
          <Box
            width="fit-content"
            pb={1}
            textAlign="center"
            position="absolute"
            top="-20px"
            left="calc(50% - 35px)"
            padding="5px"
            bgcolor="rgba(234, 234, 234, 1)"
          >
            <Typography variant="subtitle1">Go to ...</Typography>
          </Box>
          <Box width="100%" display="flex" justifyContent="center">
            {menu.map((m, i) => (
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push({ pathname: m.link })}
                style={{
                  width: '180px',
                  marginRight: i === menu.length - 1 ? 0 : '10px'
                }}
              >
                {m.text}
              </Button>
            ))}
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default DashboardScreen
