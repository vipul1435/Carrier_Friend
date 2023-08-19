import { Box, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import SideEditor from 'components/Code/sideEditor'
import Editor from 'components/Code/Editor'
import { initSocket } from 'socket/socket'
import ACTIONS from 'socket/Actions'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const Room = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const socketRef = useRef(null);
  const {RoomId} = useParams();
  const [client, setclient] = useState([])
  const codeRef = useRef(null);
  const theme = useTheme();
  
  if(!location.state){
    navigate('/codegroup');
  }
  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      
      socketRef.current.on('connect_error',(err)=>handleError(err) );
      socketRef.current.on('connect_failed',(err)=>handleError(err) );
      
      const handleError = (e)=>{
        toast.error('Connection failes, Try again!')
        navigate('/codegroup')
      }
      socketRef.current.emit(ACTIONS.JOIN,{
        roomId:RoomId,
        userName:location.state?.Name
      });
      socketRef.current.on(ACTIONS.JOINED,({clients,userName,socketId})=>{
        if(userName!==location.state?.Name){
            toast.success(`${userName} joined the Room`)
          } else {
            toast.success(`You Joined the Room`)
          }
          setclient(clients);
          

          socketRef.current.emit(ACTIONS.SYNC_CODE,{
            code:codeRef.current,
            socketId,
          })
        })
        
        socketRef.current.on(ACTIONS.DISCONNETED,({socketId,userName})=>{
          toast.success(`${userName} left the Room`);
          setclient((pre)=>{
            return pre.filter(client=>client.socketId!==socketId)
          })
        })
        
      }
      init();

      return ()=>{
        socketRef.current.disconnect();
        socketRef.current.off(ACTIONS.JOINED);
        socketRef.current.off(ACTIONS.DISCONNETED);
        
      }
    },[]);
    
  const copyRoomId = async ()=>{
    try{
      await navigator.clipboard.writeText(RoomId);
      toast.success('RoomId copied to clipboard')
    } catch(e){
      toast.error('Failed to copy RoomId')
    }
  }


  return (   
    <Box sx={{bgcolor:theme.palette.code.main, height:"100vh", width:"100vw",display:'flex',flexDirection:'row'}}
    >
      <Box sx={{height:'100vh',minWidth:'200px',borderRight:'2px solid white'}}>
        <SideEditor clients={client} copyRoomId={copyRoomId}/>
      </Box>
      <Box display='flex' flexGrow='1' sx={{height:'100vh'}}>
        <Editor socketRef={socketRef} RoomId={RoomId} onCodeChange={(code)=>{
          codeRef.current = code;
        }} />
      </Box>
    </Box>
  )
}

export default Room