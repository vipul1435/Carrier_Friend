import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import ACTIONS from 'socket/Actions';

const Editor = ({socketRef,RoomId,onCodeChange}) => {
    const editorRef = useRef();
    useEffect(()=>{
        async function init(){
           editorRef.current = Codemirror.fromTextArea(document.getElementById('editor'),{
                mode:{name:'javascript',json:true},
                theme:'dracula',
                autoCloseBrackets:true,
                autoCloseTags:true,
                lineNumbers:true,
            })

            editorRef.current.on('change',(instance,changes)=>{
                const {origin} = changes;
                const code = instance.getValue();
          
                onCodeChange(code);
                if(origin!=='setValue'){
                    
                    socketRef.current.emit(ACTIONS.CODE_CHANGE,{
                        RoomId,
                        code,
                    });
                }
            });
        }
        init();
    },[])

    useEffect(()=>{
        if(socketRef.current){
             socketRef.current.on(ACTIONS.CODE_CHANGE,({code})=>{
                if(code!==null){
                    editorRef.current.setValue(code);
                }
            })
        }
        
        return ()=>{
            if(socketRef.current){
                socketRef.current.off(ACTIONS.CODE_CHANGE);
            }
        }

    },[socketRef.current])

  return ( 
    <Box display='flex' flexGrow='1' flexDirection='column'
    >
        <Box display='flex' justifyContent='center' flexDirection='column' sx={{bgcolor:'white', height:'40px'}} >
            Select a file to edit
        </Box>
        <Box overflow='hidden' display='flex' flexGrow='1' sx={{
         height:'100vh-44px',
         width:'78vw'
         }} >
            <textarea id='editor'></textarea>
        </Box>
    </Box>
  )
}

export default Editor