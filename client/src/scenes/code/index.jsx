import { Box, Typography, TextField, Divider, Button, Snackbar ,Alert } from '@mui/material'
import React, { useState } from 'react'
import logo from 'assets/logo.png'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
const Code = () => {
  const navigate  = useNavigate();
  const [RoomId, setRoomId] = useState("");
  const [Name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("success");
  const creteNewRoom = () => {
    const id = uuidv4();
    setRoomId(id);
    toast("Room Created Successfully","success");
  }
  const [open, setOpen] = React.useState(false);
  const toast = (msg, type) =>{
    setMsg(msg);
    setOpen(true);
    setType(type);
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handelClick = () => {
    if(Name.length > 0 && RoomId.length > 0){
      navigate(`/room/${RoomId}`, { state: { Name: Name } });
    } else {
      toast("Please Enter Valid Details","error");
    }
  }
  return (
    <Box sx={
      {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: '#1c1e29',
      }
    }>
      <Snackbar anchorOrigin={{vertical:'bottom',horizontal:'right'}} open={open} autoHideDuration={2000} onClose={handleClose} >
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {msg}
        </Alert>
      </Snackbar>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#282a36',
        padding: '20px',
        borderRadius: '10px',
        boxshadow: '0px 0px 10px 0px #282a36'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          mx: '10px',
        }}>
          <Box
            component='img'
            alt='logo'
            loading='lazy'
            height='50px'
            width='50px'
            src={logo}
            mx='10px'
            mb='5px'
          ></Box>
          <Divider orientation="vertical" flexItem color='white' />
          <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 'bold', fontFamily: 'roboto', ml: "5px" }}>
            Code Group
          </Typography>
        </Box>
        <TextField size='small' type='text' name='RoomId' onChange={(e) => {
          setRoomId(e.target.value);
        }} value={RoomId} id="roomId" label="Room Id" variant="filled" sx={{
          margin: '10px',
          bgcolor: 'white',
          borderRadius: '5px',
          minWidth: '25vw',
        }}
          InputLabelProps={{
            sx: {
              color: 'black',
            }
          }}
          inputProps={{
            sx: {
              color: 'black',
              fontWeight: 'regular'
            },
          }}
          onKeyUp={(e)=>{if(e.code === 'Enter'){handelClick()}}}
        />
        <TextField size='small' type='text' name='Name' value={Name} onChange={(e) => { setName(e.target.value) }} id="name" label="User Name" variant="filled" color='primary' sx={{
          margin: '10px',
          bgcolor: 'white',
          borderRadius: '5px',
          minWidth: '25vw',
        }}
          InputLabelProps={{
            sx: {
              color: 'black',
            }
          }}
          inputProps={{
            sx: {
              color: 'black',
              fontWeight: 'regular'
            },
          }}
          onKeyUp={(e)=>{if(e.code === 'Enter'){handelClick()}}}
        />
        <Button variant='contained' sx={{ textTransform: 'capitalize', bgcolor: "#4aed88" }} onClick={handelClick} >Join Room</Button>
        <Typography sx={{
          color: 'white',
        }}>
          If you don't have a room id,<Button onClick={creteNewRoom} sx={{
            textTransform: 'capitalize',
          }} > create one</Button>
        </Typography>
      </Box>
    </Box>
  )
}

export default Code