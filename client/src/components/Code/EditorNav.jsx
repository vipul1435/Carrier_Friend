import { Box, FormControl, NativeSelect, Typography } from '@mui/material'
import React from 'react'

const EditorNav = () => {
    return (
        <Box sx={{ bgcolor:"#1c1e29", display: 'flex', flexGrow: '1'  }}>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',mx:'15px'}}>
                <Typography component={'span'} sx={{color:'white' ,fontFamily:'sans-serif',fontSize:'17px',fontWeight:'500'}}>Select Language :</Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth >
                        <NativeSelect sx={{color:'white',mx:'5px'}}
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',mx:'15px'}}>
                <Typography component={'span'} sx={{color:'white' ,fontFamily:'sans-serif',fontSize:'17px',fontWeight:'500'}}>Select Theme :</Typography>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <NativeSelect sx={{color:'white',mx:'5px'}}
                            defaultValue={"Dracule"}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={"Dracule"}>Dracule</option>
                            <option value={"Dark"}>Dark</option>
                            <option value={"Light"}>Light</option>
                        </NativeSelect>
                    </FormControl>
                </Box>
            </Box>
        </Box>
    )
}

export default EditorNav