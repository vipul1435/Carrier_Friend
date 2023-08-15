import { Box } from '@mui/material'
import React from 'react'
import SideEditor from 'components/sideEditor'
import Editor from 'components/Editor'
const Room = () => {
  return (   
    <Box sx={{bgcolor:"#1c1e29", height:"100vh", width:"100vw",display:'flex',flexDirection:'row'}}
    >
      <Box sx={{height:'100vh',minWidth:'200px',borderRight:'2px solid white'}}>
        <SideEditor/>
      </Box>
      <Box display='flex' flexGrow='1' sx={{height:'100vh'}}>
        <Editor/>
      </Box>
    </Box>
  )
}

export default Room