import { Button, Paper, Typography, useTheme, TextField, Box } from '@mui/material'
import LinkedIn from 'components/about/LinkedIn';
import React from 'react'
const About = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ py: '10px', px: '5px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap:'wrap',alignItems: 'center', mx: '10%', mt: '150px', boxShadow: `1px 1px 2px 2px ${theme.palette.admin.main[1]}` }}>
      <LinkedIn/>
      <Box sx={{ display: 'flex', flexDirection: 'column',mx:'5px' }}>
        <Typography component={'h1'} sx={{
          fontWeight: '700', fontSize: "40px", color: theme.palette.admin.main[2], textAlign: 'left', fontFamily: 'Lora'
        }}> <span style={{ color: theme.palette.secondary.main }}>Hey Everyone! I am</span> Vipul Kumar</Typography>
        <Typography component={'h1'} sx={{
          my: '5px', fontWeight: '500', fontSize: "25px", color: theme.palette.admin.main[1], textAlign: 'left', fontFamily: 'Lora'
        }}> <span style={{ color: theme.palette.secondary.main }}>I am a</span> Full Stack Developer</Typography>
        <Typography component={'h1'} sx={{
          fontWeight: '500', fontSize: "14px", color: theme.palette.secondary.main, textAlign: 'left', fontFamily: 'Lora'
        }}> For any suggestion, Write your suggestion here or send me an Email: <span style={{ color: theme.palette.primary.main }}>vipulkumarraj2003@gmail.com</span></Typography>
        <TextField fullWidth size='small' placeholder='Enter Your Name Here' sx={{ my: '20px' }} />
        <TextField fullWidth size='small' multiline rows='5' placeholder='Enter your Suggestions and review' sx={{ my: '10px' }} />
        <Button variant='contained' color='primary' sx={{ textTransform: 'capitalize', fontSize: '15px', my: '5px' }}>Review</Button>
        <Typography component={'h1'} sx={{
          fontWeight: '500', fontSize: "15px", color: theme.palette.secondary.main, textAlign: 'left', fontFamily: 'Lora', fontStyle: 'italic'
        }}> <span style={{ color: "red" }}>Note: </span> You can't Submit review more than once with in 24 hours. <span style={{ color: theme.palette.admin.main[2] }}>THANKING YOU </span></Typography></Box>
    </Paper>
  )
}

export default About