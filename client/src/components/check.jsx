import React from 'react'
import { useTheme } from '@mui/material/styles';
const Check = () => {
  const theme = useTheme();
  return (
    <>
    <div style={{background:theme.palette.primary.main}}>Check</div>
    <div style={{background:theme.palette.secondary.main}}>Check</div>
    <div style={{background:theme.palette.background.main}}>Check</div>
    <div style={{background:theme.palette.button.main}}>Check</div>
    </>
  )
}

export default Check