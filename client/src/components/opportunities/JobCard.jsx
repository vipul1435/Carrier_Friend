import { Grid, Box, Card, Typography, Divider,Chip,Button } from '@mui/material'
import React from 'react'
import { Share, WorkOutlineRounded,LocationOn,CalendarMonth,FavoriteBorderOutlined } from '@mui/icons-material'
const JobCard = () => {
    const data = ["DSA","Node.js", "JavaScript", "React.js","Express","Material UI","Aws"]
    return (
        <Grid item md={6} sx={{ px: '20px', py: '10px' }}>
            <Box component={Card} sx={{ minHeight: '200px', width: '100%-20px', bgcolor: 'white', py: '10px', px: '20px',display:'flex',justifyContent:'space-between',flexDirection:'column' }}>
                <Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid grey', height: '50px', width: '50px', borderRadius: '50%', mr: "5px", mb: '5px', fontSize: 'small' }}>
                            <WorkOutlineRounded />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>Full Stack Developer Job</Typography>
                            <Typography sx={{ fontSize: '15px', color: 'grey' }}>Google | Internship</Typography>
                        </Box>
                    </Box>
                    <Share sx={{ color: 'green' }}></Share>
                </Box>
                <Divider sx={{my:'5px'}}></Divider>
                <Box sx={{mt:'10px'}} >
                    <Typography sx={{ fontSize: '15px' }}>Skill Required : 
                    {data.map((e,key)=>{
                        return <Chip key={key} label={e} size='small' variant='outlined' sx={{m:'5px',color:'grey'}} />
                    })}</Typography>
                </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:'row',flexGrow:'1',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',bottom:'0px'}}>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <Box sx={{display:'flex',flexDirection:'row'}}>
                            <LocationOn/>
                            <Typography sx={{ml:'3px',fontSize:'15px',fontWeight:'bold'}}>Location</Typography>
                        </Box> 
                        <Typography sx={{ fontSize: '15px', color: 'grey' ,textAlign:'right' }}>Remote</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem variant='middle'/>
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                        <Box sx={{display:'flex',flexDirection:'row'}}>
                            <CalendarMonth/>
                            <Typography sx={{ml:'3px',fontSize:'15px',fontWeight:'bold'}}>Last Date</Typography>
                        </Box> 
                        <Typography sx={{ fontSize: '15px', color: 'grey' ,textAlign:'right' }}>1 Aug 2024</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem variant='middle' />
                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        {/* <Button variant='outlined' size='small'  sx={{mt:'10px'}}>View Details</Button> */}
                        <Typography sx={{ml:'3px',fontSize:'15px',fontWeight:'bold'}}>For more Details</Typography>
                        <Button variant='contained' size='small' sx={{mt:"5px",mb:'10px'}}>Apply Now</Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default JobCard