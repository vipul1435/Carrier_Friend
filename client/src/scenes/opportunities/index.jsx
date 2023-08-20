import { useTheme } from '@emotion/react'
import { Box, Card, Grid, Paper } from '@mui/material'
import React from 'react'
import FilterVar from 'components/opportunities/FilterVar'
import JobCard from 'components/opportunities/JobCard'
const Opportunities = () => {
    const theme = useTheme();
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <Paper sx={{
            position: 'relative',
            top: '130px',
            display: 'flex',
            width: '95%',
            marginX: 'auto',
            bgcolor: theme.palette.background.main,
            flexWrap: 'wrap',
            flexDirection: 'row',
            // justufyContent: 'center',
        }}>
            <Grid container >
                <Grid lg={3} md={3}>
                    <Box sx={{ bgcolor: "white", m: '7%', minHeight: '75vh', top: '100px', position: 'sticky', borderRadius: '10px', p: '4%' }}>
                        <FilterVar></FilterVar>
                    </Box>
                </Grid>
                <Grid lg={9} md={9} container sx={{mt:'20px' }}>
                    {data.map((e,key)=>{
                        return(
                            <JobCard key={key}></JobCard>
                        )
                    })}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Opportunities