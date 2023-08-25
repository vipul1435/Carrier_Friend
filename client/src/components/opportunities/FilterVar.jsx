import { Box, Typography, FormControl, Select, MenuItem, Divider, Button } from '@mui/material';
import { Tune, LocationOn, WorkOutline, Grade, VolunteerActivism } from '@mui/icons-material';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const FilterVar = ({queryData,setData,}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const handleChange = (event) => {
        setData({...queryData, [event.target.name]: event.target.value});
    };
    return (
        <Box sx={{ display: 'flex', [theme.breakpoints.down("lg")]:{flexDirection:'row'}, [theme.breakpoints.up("lg")]:{flexDirection:'column'},[theme.breakpoints.down("sm")]:{flexDirection:'column'}, justifyContent: 'space-between' }}>
            <Box sx={{[theme.breakpoints.down("lg")]:{display: 'flex',flexDirection:'row',justifyContent: 'space-between' }
        }}>
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
                    <Box>
                        <FormControl fullWidth>
                            <Select size='small'
                                name="Type"
                                variant="outlined"

                                onChange={handleChange}
                                value={queryData.Type}
                                required
                            >   
                                <MenuItem value="none">none</MenuItem>
                                <MenuItem value="Full+Time">Full Time</MenuItem>
                                <MenuItem value="Part+Time">Part Time</MenuItem>
                                <MenuItem value="Internship">Internship</MenuItem>
                                <MenuItem value="Freelance">Freelance</MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
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
                    <Box>
                        <FormControl fullWidth>
                            <Select size='small'
                                name="Worktype"
                                variant="outlined"

                                onChange={handleChange}
                                value={queryData.Worktype}
                                required
                            >
                                <MenuItem value="none">none</MenuItem>
                                <MenuItem value="Remote">Remote</MenuItem>
                                <MenuItem value="Onsite">Onsite</MenuItem>
                                <MenuItem value="Hybrid">Hybrid</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
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
                    <Box>
                        <FormControl fullWidth>
                            <Select size='small'
                                name="Grade"
                                variant="outlined"

                                onChange={handleChange}
                                value={queryData.Grade}
                                required
                            >   
                                <MenuItem value="none">none</MenuItem>
                                <MenuItem value="2020">2020</MenuItem>
                                <MenuItem value="2021">2021</MenuItem>
                                <MenuItem value="2022">2022</MenuItem>
                                <MenuItem value="2023">2023</MenuItem>
                                <MenuItem value="2024">2024</MenuItem>
                                <MenuItem value="2025">2025</MenuItem>
                                <MenuItem value="2026">2026</MenuItem>
                                <MenuItem value="2027">2027</MenuItem>
                                <MenuItem value="2028">2028</MenuItem>
                                <MenuItem value="2029">2029</MenuItem>
                                <MenuItem value="2030">2030</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
            <Box mb='4%'>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <VolunteerActivism sx={{ color: "red", }}></VolunteerActivism>
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
                        onClick={() => { navigate('/jobshare', { replace: true }) }}
                    >Share a Job</Button></Box>
            </Box>
        </Box>
    )
}

export default FilterVar