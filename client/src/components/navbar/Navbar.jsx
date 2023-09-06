import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Tabs, Typography, Tab, Box, Button, Avatar, useMediaQuery, IconButton } from "@mui/material";
import { useTheme } from '@emotion/react';
import logo from 'assets/logo.png';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
import { useNavigate } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const theme = useTheme();
  const user = useSelector((state) => state.global.user);
  const [value, setvalue] = useState(0)
  var matches = useMediaQuery(theme.breakpoints.down('md'));
  const [position, setposition] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setisLoggedIn(true);
      if(user?.Role==='admin'){
        Navigate('/admin');
      }
    } else {
      setisLoggedIn(false);
    }
  }, [user,Navigate])
  return (
    <AppBar boxshadow='10px' sx={{
      background: theme.palette.background.main,
      mt: '20px',
      boxshadow: 'none',
      borderRadius: '10px',
      width: '85%',
      left: '0',
      right: '0',
      marginX: 'auto',
      border: '2px solid white',
    }}>
      {(!matches) ? <Toolbar>
        <Box
          component="img"
          alt='LOGO'
          src={logo}
          sx={{ width: 70, height: 50 }}
        ></Box>
        <Typography component={'span'} sx={{ fontFamily: 'sans-serif', fontWeight: '1000', fontSize: '20px', color: theme.palette.primary.main }}>
          Carrier Friend
        </Typography>
        <Tabs textColor='primary' value={value} onChange={(e, value) => {
          setvalue(value)
        }} indicatorColor='primary'>
          <Tab label='Home' sx={{ fontWeight: "bold", color: 'black', textTransform: 'capitalize' }} to="/" component={Link} />
          <Tab label='Opportunities' sx={{ fontWeight: "bold", color: 'black', textTransform: 'capitalize' }} to="/opportunities" component={Link} />
          <Tab label='Code Group' sx={{ fontWeight: "bold", color: 'black', textTransform: 'capitalize' }} to="/codegroup" component={Link} />
          <Tab

            label='About US' sx={{ fontWeight: "bold", color: 'black', textTransform: 'capitalize' }} to="/aboutus" component={Link} />
        </Tabs>
        {!isLoggedIn ?<Button variant='outlined' color='primary' sx={{fontWeight:"bold",ml:"auto", textTransform:'capitalize'}} onClick={()=>{Navigate('/auth')}} >Login/Signup</Button>
        :<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', ml: 'auto', bgcolor: "grey", py: '5px', px: '10px', borderRadius: '10px' }}>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Typography component={'span'} sx={{ color: 'black', fontWeight: 'bold', fontSize: '15px', pl: '10px' }}>Vipul Kumar</Typography>
        </Box>}
      </Toolbar>
        : <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
          <IconButton onClick={() => { setposition(true) }} >
            <Menu></Menu>
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center' }}>
            <Box
              component="img"
              alt='LOGO'
              src={logo}
              sx={{ width: 70, height: 50 }}
            ></Box>
            <Typography component={'span'} sx={{ fontFamily: 'sans-serif', fontWeight: '1000', fontSize: '18px', color: theme.palette.primary.main }}>
              Carrier Friend
            </Typography>
          </Box>
          <Drawer position={position} setposition={setposition} oncli ></Drawer>
        </Toolbar>}
    </AppBar>
  )
}

export default Navbar