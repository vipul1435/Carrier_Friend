import { Box,Typography,Button } from '@mui/material'
import React from 'react'
import bg from 'assets/card.jpg'
import { alpha } from '@mui/material'
import { useTheme } from '@emotion/react'
const ImageCard = () => {
    const theme = useTheme();
  return (
    <Box sx={{height:"60vh",minWidth:'200px',bgcolor:'red',width:'45%',maxWidth:'400px',position:'relative',borderRadius:"12px"}}>
        <Box
            component="img"
            sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                objectPosition: "center",borderRadius:"12px"
            }}
            alt="The house from the offer."
            src={bg}
        >
        </Box>
        <Box
            sx={{
                position: "absolute",
                top: 0,
                right:0,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height: "100%",
                width: "100%",
                borderRadius:"12px",
                bgcolor:alpha(theme.palette.primary.main,0.8),
                
            }}
        >
           <Typography sx={{
            fontSize:'25px',
            color:'white',
            fontWeight:'bold',
            textAlign:'center'
           }}>
           Start your Journy with us
            </Typography> 
            <Button variant='contained' color='primary'>Let's Start</Button>
        </Box>
    </Box>
  )
}

export default ImageCard