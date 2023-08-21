import { Box, Paper, Typography, Divider, FormControl, TextField, Grid, Button, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react';
import { useTheme } from '@mui/material';
import { VolunteerActivism } from '@mui/icons-material';
import { InitialData } from 'Actions/ShareJobAction'
import { useShareJobMutation } from 'store/api';
const JobShare = () => {
    const theme = useTheme();
    const [data, setdata] = useState(InitialData);
    const [shareJob] = useShareJobMutation();

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value});
    }
    const hanleChangeArray = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value.split(',') });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
       const val = shareJob(data);
       console.log(val);
    }
    return (
        <Box sx={{ bgcolor: theme.palette.background.main, width: '100%', pt: '3%' }}>
            <Paper sx={{ width: '70vw', mx: 'auto', p: "20px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <VolunteerActivism sx={{ color: theme.palette.primary.main }}></VolunteerActivism>
                    <Typography sx={{
                        mx: '5px',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        marginBottom: '10px',
                        textAlign: 'center',
                        color: theme.palette.secondary.main
                    }}>
                        Help our Community by Sharing a Job
                    </Typography></Box>
                <Divider ></Divider>

                <FormControl sx={{ width: '100%' }}>
                    <Grid container sx={{ mt: '20px' }}>
                        <Grid item lg={6} sx={{ p: '20px' }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Company Name <span style={{ color: 'red', fontSize: '20px' }}>*</span></Typography>
                            <TextField
                                fullWidth
                                placeholder='Enter Company Name'
                                variant="outlined"
                                name="Company"
                                size='small'

                                onChange={handleChange}
                                value={data.Company}
                                required
                            />
                        </Grid>
                        <Grid item lg={6} sx={{ p: '20px' }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Office Location<span style={{ color: 'red', fontSize: '20px' }}></span></Typography>
                            <TextField
                                fullWidth
                                placeholder='Enter Office Location'
                                variant="outlined"
                                name="Location"

                                onChange={handleChange}
                                value={data.Location}
                                size='small'
                            />
                        </Grid>

                        <Grid item lg={6} sx={{ px: '20px', }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Job Role <span style={{ color: 'red', fontSize: '20px' }}>*</span></Typography>
                            <FormControl fullWidth>
                                <Select size='small'
                                    name="Role"
                                    variant="outlined"

                                    value={data.Role}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="Full Stack Developer Job">Full Stack Developer Job</MenuItem>
                                    <MenuItem value="Frontend Developer Job">Frontend Developer Job</MenuItem>
                                    <MenuItem value="Backend Developer Job">Backend Developer Job</MenuItem>
                                    <MenuItem value="DevOps Developer Job">DevOps Developer Job</MenuItem>
                                    <MenuItem value="Data Scientist Job">Data Scientist Job</MenuItem>
                                    <MenuItem value="Data Analyst Job">Data Analyst Job</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} sx={{ px: '20px' }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Job Type <span style={{ color: 'red', fontSize: '20px' }}>*</span></Typography>
                            <FormControl fullWidth>
                                <Select size='small'
                                    name="Type"
                                    variant="outlined"

                                    onChange={handleChange}
                                    value={data.Type}
                                    required
                                >
                                    <MenuItem value="Full Time">Full Time</MenuItem>
                                    <MenuItem value="Part Time">Part Time</MenuItem>
                                    <MenuItem value="Internship">Internship</MenuItem>
                                    <MenuItem value="Freelance">Freelance</MenuItem>
                                    <MenuItem value="Contract">Contract</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item lg={6} sx={{ p: '20px' }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Work Type <span style={{ color: 'red', fontSize: '20px' }}>*</span></Typography>
                            <FormControl fullWidth>
                                <Select size='small'
                                    name="Worktype"
                                    variant="outlined"

                                    onChange={handleChange}
                                    value={data.Worktype}
                                    required
                                >

                                    <MenuItem value="Remote">Remote</MenuItem>
                                    <MenuItem value="Onsite">Onsite</MenuItem>
                                    <MenuItem value="Hybrid">Hybrid</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item lg={6} sx={{ p: '20px' }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Last Date for Apply <span style={{ color: 'red', fontSize: '20px' }}></span></Typography>

                            <TextField
                                size='small'
                                fullWidth
                                type="date"
                                variant="outlined"
                                name="LastDate"

                                onChange={handleChange}
                                value={data.LastDate}
                            />

                        </Grid>
                        <Grid item lg={12} sx={{ px: '20px' }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Application Link <span style={{ color: 'red', fontSize: '20px' }}>*</span></Typography>
                            <TextField
                                fullWidth
                                placeholder='Enter url.....'
                                variant="outlined"
                                name="Link"
                                size='small'
                                onChange={handleChange}
                                value={data.Link}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ p: '20px' }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Required Skills <span style={{ color: 'red', fontSize: '14px' }}>{"[ Skills Should be Seprated by (,) ]"}</span></Typography>
                            <TextField
                                fullWidth
                                size='small'
                                placeholder='react, node, express, mongodb........'
                                variant="outlined"
                                name="Skill"
                                onChange={hanleChangeArray}
                                value={data.Skill}
                                multiline
                                rows={1}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ px: '20px', py: "10px" }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Eligible Batchs <span style={{ color: 'red', fontSize: '14px' }}>{"[Batches Should be Seprated by (,) ]"}</span></Typography>
                            <TextField
                                fullWidth
                                size='small'
                                placeholder='2023,2024,2025.....'
                                variant="outlined"
                                name="Grade"
                                onChange={hanleChangeArray}
                                value={data.Grade}
                                multiline
                                rows={1}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ px: '20px', py: "10px" }}>
                            <Typography sx={{ fontSize: '14px', mb: '5px' }}>Job Description <span style={{ color: 'red', fontSize: '20px' }}></span></Typography>
                            <TextField
                                fullWidth
                                placeholder='Enter Job Description'
                                variant="outlined"
                                name="Description"
                                size='small'

                                onChange={handleChange}
                                value={data.Description}
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', mb: '20px', mt: '10px' }}>
                            <Button type="submit" variant="contained" color="primary" sx={{ textTransform: 'capitalize', px: '40px' }} onClick={handleSubmit}>
                                Share Job
                            </Button>
                        </Grid>

                    </Grid>
                </FormControl>
            </Paper>
        </Box>
    )
}

export default JobShare