import { useTheme } from '@emotion/react'
import { Box, Typography, Paper, TextField, Button } from '@mui/material'
import bg from 'assets/bg_4.png'
import React, { useState } from 'react'
const Auth = () => {
  const [isLogin, setisLogin] = useState(true)
  const theme = useTheme();
  const [credential, setcredential] = useState({});
  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <Box display='flex' flexDirection='column' alignItems='center' sx={{
      bgcolor: theme.palette.background.main,
      height: '100vh',
      width: '100%',
    }}>
      <Box
        component='img'
        src={bg}
        width='99%'
        height='40vh'
        sx={{
          objectFit: 'cover',
          borderRadius:"16px",
          margin:'6px',
        }}
      ></Box>
      <Box data-aos="fade-up" display='flex' flexDirection='column' justifyContent='center' alignItems='center' top='30vh' m='10px' position='absolute'>
        <Paper display="flex" flexDirection="column" justifyContent="centre" component={Box} padding='10px 20px'>
          <Box display='flex' flexDirection='column' alignItems='center' sx={{
            background: "linear-gradient(195deg, rgb(73, 163, 241), #1a73e8)",
            padding: '15px',
            borderRadius: '15px',
            position: 'relative',
            top: '-50px',
            marginX: '15px',
            minWidth: '300px',
            boxshadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
          }}>
            <Typography color='white' fontFamily='roboto' fontSize='30px' fontWeight='550'>
              {isLogin ? "Welcome Back" : "Join Us Today"}
            </Typography>
            <Typography color='white' fontFamily='sans-serif' fontSize='16px'>
            Enter your email and password
            </Typography>
          </Box>
          {!isLogin && <TextField type='text' name='Name' size='small' onChange={onchange} id="name" label="Name" variant="outlined" color='secondary' sx={{
            margin: '10px',
          }} />}
          <TextField size='small' type='email' name='Email' onChange={onchange} id="email" label="Email" variant="outlined" color='secondary' sx={{
            margin: '10px',
          }} />
          <TextField size='small' type='password' name='Password' onChange={onchange} id="password" label="Password" variant="outlined" color='secondary' sx={{
            margin: '10px',
          }} />
          <Button onClick={() => { console.log(credential) }} variant="contained" sx={{ 
            background: "linear-gradient(195deg, rgb(73, 163, 241), #1a73e8)",
            marginX: '10px',
            marginY: '20px',
            textTransform: 'none',
          }}>{isLogin ? "Log In" : "Sign Up"}</Button>
          <Typography justifyContent='center' display='flex' alignItems='center'>
            {isLogin ? "Don't have an Account" : "Aleready have an Account?"}  <Button onClick={() => { setisLogin(!isLogin) }} sx={{
              fontWeight: 'bold',
              textTransform: 'none',
            }} >{isLogin ? "Log In" : "Sign Up"}</Button>
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}
export default Auth