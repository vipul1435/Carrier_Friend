import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Divider, Button } from '@mui/material';
import React from 'react';
import { Tune, LocationOn, WorkOutline, Grade, VolunteerActivism } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const FilterVar = () => {
    const navigate= useNavigate();
    const theme = useTheme();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Tune sx={{ color: theme.palette.primary.main }}></Tune>
                    <Typography sx={{
                        mx: '5px',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '10px',
                        textAlign: 'center',
                    }}>
                        Jobs Filter
                    </Typography></Box>
                <Divider></Divider>
                <Box sx={{ my: '25px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <WorkOutline sx={{ color: theme.palette.secondary.main }}></WorkOutline>
                        <Typography sx={{
                            mx: '5px',
                            fontWeight: '500',
                            fontSize: '15px',
                            marginBottom: '10px',
                            textAlign: 'center',
                        }}>
                            Find by Job Type:
                        </Typography></Box>
                    <div>
                        <FormControl sx={{ mx: "0px", width: '80%', minWidth: 80 }} size='small'>
                            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem>
                                <MenuItem value={21}>Twenty one</MenuItem>
                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Box>
                <Box sx={{ my: '25px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <LocationOn sx={{ color: theme.palette.secondary.main }}></LocationOn>
                        <Typography sx={{
                            mx: '5px',
                            fontWeight: '500',
                            fontSize: '15px',
                            marginBottom: '10px',
                            textAlign: 'center',
                        }}>
                            Find by Job Location:
                        </Typography></Box>
                    <div>
                        <FormControl sx={{ mx: "0px", width: '80%', minWidth: 80 }} size='small'>
                            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem>
                                <MenuItem value={21}>Twenty one</MenuItem>
                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Box>
                <Box sx={{ my: '25px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Grade sx={{ color: theme.palette.secondary.main }}></Grade>
                        <Typography sx={{
                            mx: '5px',
                            fontWeight: '500',
                            fontSize: '15px',
                            marginBottom: '10px',
                            textAlign: 'center',
                        }}>
                            Find by your Grade:
                        </Typography></Box>
                    <div>
                        <FormControl sx={{ mx: "0px", width: '80%', minWidth: 80 }} size='small'>
                            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={age}
                                onChange={handleChange}
                                autoWidth
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Twenty</MenuItem>
                                <MenuItem value={21}>Twenty one</MenuItem>
                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Box>
            </Box>
            <Box mb='4%'>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <VolunteerActivism sx={{ color: theme.palette.secondary.main }}></VolunteerActivism>
                    <Typography sx={{
                        mx: '5px',
                        fontWeight: '500',
                        fontSize: '15px',
                        marginBottom: '10px',
                        textAlign: 'center',
                    }}>
                        Help Community:
                    </Typography></Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='contained' size='small' sx={{ textTransform: 'capitalize' }}
                    onClick={()=>{navigate('/jobshare')}}
                    >Share a Job</Button></Box>
            </Box>
        </Box>
    )
}

export default FilterVar