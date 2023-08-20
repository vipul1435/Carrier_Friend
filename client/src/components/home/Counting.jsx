import { Box,Typography, useTheme} from '@mui/material'
import React, { useEffect, useState } from 'react'
const Counting = () => {
    const [value, setvalue] = useState(0);
  useEffect(()=>{
    const increment = setInterval(()=>{
      setvalue((pre)=>{
        if(pre<300) return pre+16;
        clearInterval(increment);
        return pre;
      })
    },50)
  },[])
  const theme  = useTheme();
  return (
    <Box sx={{display:"flex",justifyContent:'center', [theme.breakpoints.up('lg')]:{flexDirection:"row"}, [theme.breakpoints.down('lg')]:{flexDirection:"column"}, alignItems:'center',px:'200px',my:"50px"}}>
          <Box sx={{display:"flex",justifyContent:'center',flexDirection:"column" , alignItems:'center',mx:'10px', }}>
            <Typography sx={{fontFamily:"Chakra Petch",fontSize:"50px",color:theme.palette.primary.main}}>{value}+</Typography>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',fontFamily:"sans-serif",color:theme.palette.secondary.main}}>Opportunities</Typography>
            <Typography sx={{color:'grey',fontWeight:'300',textAlign:'center',[theme.breakpoints.up("lg")]:{mx:"30px"}}}>Full Time, Part Time and Internships avilable in variuos fields.</Typography>
          </Box>
          <Box sx={{display:"flex",justifyContent:'center',flexDirection:'column',  alignItems:'center',mx:'10px'}}>
            <Typography sx={{fontFamily:"Chakra Petch",fontSize:"50px",color:theme.palette.primary.main}}>{value}+</Typography>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',fontFamily:"sans-serif",color:theme.palette.secondary.main}}>Opportunities</Typography>
            <Typography sx={{color:'grey',fontWeight:'300',textAlign:'center',[theme.breakpoints.up("lg")]:{mx:"30px"}}}>Full Time, Part Time and Internships avilable in variuos fields.</Typography>
          </Box>
          <Box sx={{display:"flex",justifyContent:'center',flexDirection:'column',  alignItems:'center',mx:'10px'}}>
            <Typography sx={{fontFamily:"Chakra Petch",fontSize:"50px",color:theme.palette.primary.main}}>{value}+</Typography>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',fontFamily:"sans-serif",color:theme.palette.secondary.main}}>Opportunities</Typography>
            <Typography sx={{color:'grey',fontWeight:'300',textAlign:'center',[theme.breakpoints.up("lg")]:{mx:"30px"}}}>Full Time, Part Time and Internships avilable in variuos fields.</Typography>
          </Box>
    </Box>
  )
}

export default Counting