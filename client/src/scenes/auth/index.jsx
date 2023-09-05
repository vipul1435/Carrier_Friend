import { useTheme } from '@emotion/react'
import { Box, Typography, Paper, TextField, Button, CircularProgress } from '@mui/material'
import bg from 'assets/bg_4.png'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setUser } from "store";
import { toast } from 'react-toastify'
import { useUserLoginMutation, useUserSignupMutation} from 'store/api'
const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(true)
  const [authStarted, setauthStarted] = useState(false)
  const theme = useTheme();
  const [credential, setcredential] = useState({ Name: '', Email: '', Password: '' });
  const [userLogin] = useUserLoginMutation();
  const [userSignup] = useUserSignupMutation();
  const onchange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  const Authenticate = async () => {
    setauthStarted(true);
    if (isLogin) {
     await userLogin(credential).then((res) => {
        if(res?.data){
          dispatch(setUser(res.data));
          toast.success("Logged in Successfully")
          navigate(-1);
        } else {
          toast.error("Invalid Email or Password")
        }
      }).catch((error) => {
        toast.error("Inernal Server Error")
      })
    } else {
     await userSignup(credential).then((res) => {
        if (res?.data) {
          dispatch(setUser(res.data));
          toast.success("Sign Up Successfully");
          navigate(-1);
        } else {
          toast.error("User may Already Exist")
        }
      }).catch((error) => {
        toast.error("Inernal Server Error")
      })
    }
    setauthStarted(false);
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
          borderRadius: "16px",
          margin: '6px',
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
          <Button onClick={Authenticate} variant="contained" sx={{
            background: "linear-gradient(195deg, rgb(73, 163, 241), #1a73e8)",
            marginX: '10px',
            marginY: '20px',
            textTransform: 'none',
          }}>{authStarted ? <CircularProgress size='25px' color="secondary" /> : (isLogin ? "Log In" : "Sign Up")}</Button>
          <Typography justifyContent='center' display='flex' alignItems='center'>
            {isLogin ? "Don't have an Account" : "Aleready have an Account?"}  <Button onClick={() => { setisLogin(!isLogin) }} sx={{
              fontWeight: 'bold',
              textTransform: 'none',
            }} >{!isLogin ? "Log In" : "Sign Up"}</Button>
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}
export default Auth