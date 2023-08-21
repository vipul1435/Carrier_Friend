import { WorkOutline, Code, QueryBuilder, VolunteerActivism } from '@mui/icons-material';
import { Box, useTheme, Typography, Grid, } from '@mui/material'
import React from 'react'
import ImageCard from './ImageCard';
const Detail = () => {
  const theme = useTheme();
  
  return (
    <Box data-aos="fade-up" sx={{ display: "flex", m: '20px', px: '100px', justifyContent: 'center', alignItems: 'center', mt: '20px', [theme.breakpoints.up('lg')]: { flexDirection: "row" }, [theme.breakpoints.down('lg')]: { flexDirection: "column" }, }}>

      <ImageCard></ImageCard>

      <Grid container>
        <Grid item lg={6} sm={12} py='30px' px="50px">
          <WorkOutline sx={{ color: theme.palette.primary.main, fontSize: '35px' }} />
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: "sans-serif", color: theme.palette.secondary.main, my: '10px' }}>Get Dream Job</Typography>
          <Typography sx={{ color: 'grey', fontWeight: '300', textAlign: "left" }}>We provide Full Time, Part Time, and Internship opportunites accoding to students Skills, Grade, Branch and Location.</Typography>
        </Grid>
        <Grid item lg={6} sm={12} py='30px' px="50px">
          <VolunteerActivism sx={{ color: theme.palette.primary.main, fontSize: '35px' }} />
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: "sans-serif", color: theme.palette.secondary.main, my: '10px' }}>Help Community</Typography>
          <Typography sx={{ color: 'grey', fontWeight: '300', textAlign: "left" }}>Help our community and students by sharing a job Opportunity. We will publish your job after verification.</Typography>
        </Grid>
        <Grid item lg={6} sm={12} py='30px' px="50px">
          <Code sx={{ color: theme.palette.primary.main, fontSize: '35px' }} />
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: "sans-serif", color: theme.palette.secondary.main, my: '10px' }}>Code in Group</Typography>
          <Typography sx={{ color: 'grey', fontWeight: '300', textAlign: "left" }}>Codingn in Group is now very Easy. Create a room and share unique Id with your friends.</Typography>
        </Grid>
        <Grid item lg={6} sm={12} py='30px' px="50px">
          <QueryBuilder sx={{ color: theme.palette.primary.main, fontSize: '35px' }} />
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold', fontFamily: "sans-serif", color: theme.palette.secondary.main, my: '10px' }}>Save Time</Typography>
          <Typography sx={{ color: 'grey', fontWeight: '300', textAlign: "left" }}>Now Save your time in Searcing jobs on different Plateforms. And Save your time in Sharing screehot of code for Debugging.</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Detail