import { Box, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {
    const theme = useTheme();
  return (
    <Box sx={{width:'100%',textAlign:'center',bgcolor:theme.palette.secondary.main}}>
        This Website is hosted and maintained by Vipul Kumar
    </Box>
  )
}

export default Footer