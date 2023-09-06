import { Box, Typography } from '@mui/material'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { useTheme } from '@mui/material/styles';
const TypeWriterEffect = () => {
    const theme = useTheme();
    return (
        <Box sx={{ display: "flex", top: "30vh", position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }}>
            <Typography component={'span'} sx={{ fontFamily: "Chakra Petch", fontSize: "50px", color:  theme.palette.primary.main}}>Carrier Friends</Typography>
            <Box sx={{ fontFamily: "Chakra Petch", fontSize: "50px", color: "white",display:'flex',flexDirection:'row' }}>
                <Typography component={'span'} sx={{ fontFamily: "Chakra Petch", fontSize: "30px", color: "white",mr:"10px" }}> We Provides</Typography>
                <Typography component={'span'} sx={{ fontFamily: "Chakra Petch", fontSize: "30px", color: theme.palette.primary.main }}>
                    <Typewriter
                        options={{
                            strings: ['Full Time Jobs','Internships' ,'Part Time Jobs','Remote Coding With Friends'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 2000,
                        }}
                    />
                </Typography>
            </Box>
        </Box>
    )
}

export default TypeWriterEffect