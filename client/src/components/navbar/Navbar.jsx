import React, { useState } from 'react'
import { AppBar, Toolbar, Tabs, Typography,Tab,Box , Button, useMediaQuery , IconButton } from "@mui/material"
import { useTheme } from '@emotion/react'
import logo from 'assets/logo.png'
import { Link } from 'react-router-dom'
import Drawer from './Drawer'
import { useNavigate } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
const Navbar = () => {
  const theme = useTheme();
  const Navigate = useNavigate()
  const [value, setvalue] = useState(0)
  var matches = useMediaQuery(theme.breakpoints.down('md'));
  const [position, setposition] = useState(false);
  return (
    <AppBar boxshadow='10px'  sx={{background:theme.palette.background.main,
      mt:'20px',
      boxshadow:'none',
      borderRadius:'10px',
      width:'85%',
      left:'0',
      right:'0',
      marginX:'auto',
      border:'2px solid white',
     }}>
   { (!matches)?<Toolbar>
        <Box
        component="img"
        alt='LOGO'
        src={logo}
        sx={{ width: 70, height: 50 }}
        ></Box>
        <Typography sx={{fontFamily:'sans-serif',fontWeight:'1000',fontSize:'20px',color:theme.palette.primary.main}}>
          Carrier Friend
        </Typography>
        <Tabs textColor='primary' value={value} onChange={(e,value)=>{
           setvalue(value)}} indicatorColor='primary'>
          <Tab  label='Home' sx={{fontWeight:"bold",color:'black' , textTransform:'capitalize'}} to="/" component={Link} />
          <Tab  label='Opportunities' sx={{fontWeight:"bold",color:'black' , textTransform:'capitalize'}} to="/opportunities" component={Link}/>
          <Tab  label='Code Group'  sx={{fontWeight:"bold",color:'black' , textTransform:'capitalize'}} to="/codegroup" component={Link}/>
          <Tab 
          
          label='About US'  sx={{fontWeight:"bold",color:'black' , textTransform:'capitalize'}} to="/aboutus" component={Link}/>
        </Tabs>
        <Button variant='outlined' color='primary' sx={{fontWeight:"bold",ml:"auto", textTransform:'capitalize'}} onClick={()=>{Navigate('/auth')}} >Login/Signup</Button>
      </Toolbar>
      :<Toolbar sx={{display:'flex',justifyContent:"space-between"}}>
        <IconButton onClick={()=>{setposition(true)}} >
          <Menu></Menu>
        </IconButton>
        <Box sx={{display:"flex",flexDirection:'row',alignItems:'center'}}>
      <Box
        component="img"
        alt='LOGO'
        src={logo}
        sx={{ width: 70, height: 50 }}
        ></Box>
        <Typography sx={{fontFamily:'sans-serif',fontWeight:'1000',fontSize:'18px',color:theme.palette.primary.main}}>
          Carrier Friend
        </Typography>
        </Box>
        <Drawer position={position}setposition= {setposition} oncli ></Drawer>
      </Toolbar>}
    </AppBar>
  )
}

export default Navbar