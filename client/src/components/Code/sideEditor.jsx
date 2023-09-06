import { Box, Button, Divider, Typography, Avatar ,Card} from '@mui/material'
import logo from 'assets/logo.png'
import React from 'react'
import { PersonAddAlt1, ContentCopy, ExitToApp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SideEditor = ({clients,copyRoomId}) => {
  const navigate = useNavigate();
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: 'primary.main',
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <Box display='flex' flexDirection='column' sx={{
      height: '100vh',
      justifyContent: 'space-between',
    }}>
      <Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          mx: '20px',
          my: '20px'
        }}>
          <Box
            component='img'
            alt='logo'
            loading='lazy'
            height='40px'
            width='40px'
            src={logo}
            mx='10px'
            mb='5px'
          ></Box>
          <Divider orientation="vertical" flexItem color='white' />
          <Typography component={'span'} sx={{ color: 'white', fontSize: '25px', fontWeight: 'bold', fontFamily: 'roboto', ml: "5px" }}>
            Code Group
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: 'white' }}></Divider>
        <Box overflow='auto' className='user-pad'  flexWrap='wrap' margin='20px' display={{ display: 'flex', flexDirection:'row', width:'300px',height:'400px' }}>
          {clients.map((client , key)=>{
            return <Box key={key} component={Card} display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{bgcolor:'#282a36',p:'10px',m:'10px',height:'75px'}}>
            <Avatar {...stringAvatar('Lappu Sappu')} />
            <Typography component={'span'} color='white'>{client.userName}</Typography>
            </Box>
          })} 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '10px', p: '10px' }}>
        <Button variant='contained' sx={{ my: '10px', textTransform: 'capitalize' }}><PersonAddAlt1 sx={{ mr: "5px" }} />Invite</Button>
        <Button variant='contained' onClick={copyRoomId} color="success" sx={{ my: '10px', textTransform: 'capitalize' }}> <ContentCopy sx={{ mr: "5px" }} />Copy room id</Button>
        <Button variant='contained' onClick={()=>{navigate('/codegroup',{replace:true})}} color='error' sx={{ my: '10px', textTransform: 'capitalize' }}> <ExitToApp sx={{ mr: "5px" }} />Leave Room</Button>
      </Box>
    </Box>
  )
}

export default SideEditor