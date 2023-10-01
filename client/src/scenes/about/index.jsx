import { Button, Paper, Typography, useTheme,TextField } from '@mui/material'
import React from 'react'

const About = () => {
  const theme = useTheme();
  return (
    <Paper sx={{py:'10px', px:'5px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mx: '10%', mt: '150px', boxShadow:`1px 1px 2px 2px ${theme.palette.admin.main[1]}` }}>
      <Typography component={'h1'} sx={{ 
        fontWeight: '700', fontSize: "2.5rem", color: theme.palette.admin.main[2], textAlign: 'left', fontFamily: 'Lora'
      }}> <span style={{ color: theme.palette.secondary.main }}>Hey Everyone! I am</span> Vipul Kumar</Typography>
      <Typography component={'h1'} sx={{ 
       my:'5px', fontWeight: '500', fontSize: "2rem", color: theme.palette.admin.main[1], textAlign: 'left', fontFamily: 'Lora'
      }}> <span style={{ color: theme.palette.secondary.main }}>I am a</span> Full Stack Developer</Typography>
      <Typography component={'h1'} sx={{
        fontWeight: '500', fontSize: "18px", color: theme.palette.secondary.main, textAlign: 'left', fontFamily: 'Lora'
      }}> For any suggestion, Write your suggestion here or send me an Email: <span style={{ color: theme.palette.primary.main }}>vipulkumarraj2003@gmail.com</span></Typography>
      <TextField size='small' placeholder='Enter Your Name Here' sx={{my:'20px',width:'50%',minWidth:'200px'}}/>
      <TextField multiline rows='5' size='small' placeholder='Enter your Suggestions and review' sx={{my:'10px',width:'50%',minWidth:'200px'}}/>
      <Button variant='contained' color='primary' sx={{textTransform:'capitalize',fontSize:'15px',my:'5px'}}>Review</Button>
      <Typography component={'h1'} sx={{
        fontWeight: '500', fontSize: "15px", color: theme.palette.secondary.main, textAlign: 'left', fontFamily: 'Lora',fontStyle:'italic'
      }}> <span style={{ color: "red" }}>Note: </span> You can't Submit review more than once with in 24 hours. <span style={{ color: theme.palette.admin.main[2] }}>THANKING YOU </span></Typography>
    </Paper>
  )
}

export default About