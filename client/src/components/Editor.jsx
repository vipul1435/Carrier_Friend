import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Codemirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';

const Editor = () => {
    // const init =async ()=>{
    //     Codemirror.fromTextArea(document.getElementById('editor'),{
    //         mode:{name:'javascript',json:true},
    //         theme:'dracula',
    //         autoCloseBrackets:true,
    //         autoCloseTags:true,
    //         lineNumbers:true,
    //     })
    // }

    useEffect(()=>{
        async function init(){
            console.log('init')
            Codemirror.fromTextArea(document.getElementById('editor'),{
                mode:{name:'javascript',json:true},
                theme:'dracula',
                autoCloseBrackets:true,
                autoCloseTags:true,
                lineNumbers:true,
            })
        }
        init();
    },[])
  return ( 
    <Box display='flex' flexGrow='1' flexDirection='column'
    >
        <Box display='flex' justifyContent='center' flexDirection='column' sx={{bgcolor:'white', height:'40px'}} >
            Select a file to edit
        </Box>
        <Box overflow='hidden' display='flex' flexGrow='1' sx={{bgcolor:'red', height:'100vh-44px',width:'78vw'}} >
            <textarea id='editor'></textarea>
        </Box>
    </Box>
  )
}

export default Editor