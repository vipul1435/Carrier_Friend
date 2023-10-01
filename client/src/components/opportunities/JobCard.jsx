import { Grid, Box, Card, Typography, Divider, Chip, Button } from '@mui/material'
import React from 'react'
import { Share, WorkOutlineRounded, LocationOn, CalendarMonth } from '@mui/icons-material'
const JobCard = ({ data }) => {
    const inputDate = data?.LastDate;
    const dateObject = new Date(inputDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);  
    return (
        <Grid item sm={12} lg={6} sx={{ px: '20px', py: '10px' }}>
            <Box component={Card} sx={{ minHeight: '200px', width: '100%-20px', bgcolor: 'white', py: '10px', px: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid grey', height: '50px', width: '50px', borderRadius: '50%', mr: "5px", mb: '5px', fontSize: 'small' }}>
                                <WorkOutlineRounded />
                            </Box>
                            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                                <Typography component={'span'} sx={{ fontSize: '18px', fontWeight: 'bold' }}>{data?.Role}</Typography>
                                <Typography component={'span'} sx={{ fontSize: '15px', color: 'grey' }}>{data?.Company} | {data?.Type}</Typography>
                            </Box>
                        </Box>
                        <Share sx={{ color: 'green' }}></Share>
                    </Box>
                    <Divider sx={{ my: '5px' }}></Divider>
                    <Box sx={{ mt: '10px' }} >
                        <Typography component={'span'} sx={{ fontSize: '15px' }}>Skill Required :
                            {data?.Skill?.map((e, key) => {
                                return <Chip key={key} label={e} size='small' variant='outlined' sx={{ m: '5px', color: 'grey',textTransform:'capitalize' }} />
                            })}</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: '1', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', bottom: '0px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <LocationOn />
                            <Typography component={'span'} sx={{ ml: '3px', fontSize: '15px', fontWeight: 'bold' }}>Location</Typography>
                        </Box>
                        <Typography component={'span'} sx={{ fontSize: '15px', color: 'grey', textAlign: 'right' }}>{data?.Worktype}</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem variant='middle' />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <CalendarMonth />
                            <Typography component={'span'} sx={{ ml: '3px', fontSize: '15px', fontWeight: 'bold' }}>Last Date</Typography>
                        </Box>
                        <Typography component={'span'} sx={{ fontSize: '15px', color: 'grey', textAlign: 'right' }}>{formattedDate}</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem variant='middle' />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Button variant='outlined' size='small'  sx={{mt:'10px'}}>View Details</Button> */}
                        <Typography component={'span'} sx={{ ml: '3px', fontSize: '15px', fontWeight: 'bold' }}>For more Details</Typography>
                        <Button variant='contained' size='small' sx={{ mt: "5px", mb: '10px' }}>Apply Now</Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}

export default JobCard