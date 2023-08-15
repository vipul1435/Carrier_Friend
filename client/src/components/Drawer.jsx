import React from 'react'
import { SwipeableDrawer , Divider , List , ListItem, ListItemButton, ListItemIcon , ListItemText } from '@mui/material' 
import { Login , Home ,Work,Code,ContactPage , Close } from '@mui/icons-material'
import { useTheme } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
const Drawer = ({position,setposition}) => {
  const theme = useTheme();
  const Navigate = useNavigate();
  return (
    
    <SwipeableDrawer open={position} onOpen={()=>{}} onClose={()=>{}} PaperProps={{
      sx: {
        backgroundColor: theme.palette.background.main,
        color: "black",
      }
    }} >
      <List>
      <ListItem  >
          <ListItemButton onClick={()=>{setposition(false)}}>
            <ListItemIcon >
              <Close></Close>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem  >
          <ListItemButton onClick={()=>{Navigate("/auth");setposition(false);}}>
            <ListItemIcon>
              <Login></Login>
            </ListItemIcon>
              <ListItemText primary="Login/Signup" />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem  >
          <ListItemButton onClick={()=>{Navigate("/");setposition(false);}}>
            <ListItemIcon>
              <Home></Home>
            </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem  >
          <ListItemButton onClick={()=>{Navigate("/opportunities");setposition(false);}}>
            <ListItemIcon>
              <Work></Work>
            </ListItemIcon>
              <ListItemText primary="Opportunities" />
          </ListItemButton>
        </ListItem>
        <ListItem  >
          <ListItemButton onClick={()=>{Navigate("/codegroup");setposition(false);}}>
            <ListItemIcon>
              <Code></Code>
            </ListItemIcon>
              <ListItemText primary="Code Group" />
          </ListItemButton>
        </ListItem>
        <ListItem  >
          <ListItemButton onClick={()=>{Navigate("/aboutus");setposition(false);}}>
            <ListItemIcon>
              <ContactPage></ContactPage>
            </ListItemIcon>
              <ListItemText primary="About Us" />
          </ListItemButton>
        </ListItem>
      </List>
    </SwipeableDrawer>
    
  )
}

export default Drawer