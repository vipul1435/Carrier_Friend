import { Box,Typography,useTheme } from '@mui/material';
import React from 'react';
import img from 'assets/user.jpg';

const UserCard = () => {
    const theme  = useTheme();
    return (
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',pl:2,mx:'auto'}}>
                <Typography component={'h1'} sx={{
                    fontWeight:'700', fontSize:"2.5rem",color:theme.palette.admin.main[2],textAlign:'left',fontFamily:'Lora'
                }}> Hey Vipul</Typography>
                <Typography component={'h4'} sx={{
                    fontWeight:'500', fontSize:"1.3rem",color:theme.palette.admin.main[3],textAlign:'left',fontFamily:'Lora'
                }}>Welcome to Carrier Friend Admin Service</Typography>
            </Box>
            <Box
                component={"img"}
                alt='admin'
                src={img}
                height={200}
                sx={{
                    m:'auto'
                }}
            />
        </Box>
    )
}

export default UserCard