import { Box, Paper,Typography, useTheme} from '@mui/material'
import React from 'react'
import banner from "assets/bn_1.jpg" 
import Counting from 'components/home/Counting'
import Detail from 'components/home/Detail'
const Home = () => {
  const theme  = useTheme();
  return (
    <Box sx={{display:"flex",width:"100%",flexDirection:"column",justifyContent:'center',bgcolor:theme.palette.background.main}}>
      <Box
      component='img' alt='Banner' loading='lazy' src={banner} sx={{width:'100%',height:'80vh',objectFit:'cover',opacity:'1'}}
      >
      </Box>
      <Paper data-aos="fade-up" sx={{display:"flex",justifyContent:'center',flexDirection:'column',  alignItems:'center',mx:'40px',position:'relative', top:"-60px"}}>
        <Counting/>
        <Detail></Detail>
      </Paper>
    </Box>
  )
}

export default Home