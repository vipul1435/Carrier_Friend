import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import img from 'assets/access-denied.png'
import { useNavigate } from 'react-router-dom'
const AccessDenied = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:
                'column', mt: '100px',mx:'auto'
        }}>
            <Box
                component='img'
                src={img}
            >

            </Box>
            <Box component={Button} onClick={()=>{navigate("/")}} sx={{bgcolor:"#75a3db",px:'20px',borderRadius:'20px',cursor:'pointer',position:'relative',top:'-55px',":hover":{bgcolor:"#90b6e8"}}} >
                <Typography component={"h1"} sx={{color:'white',fontWeight:'bold',fontSize:'40px'}}>Go To Home Page</Typography>
            </Box>
        </Box>
    )
}

export default AccessDenied