import { useTheme } from '@emotion/react'
import { Box, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react';
import FilterVar from 'components/opportunities/FilterVar'
import JobCard from 'components/opportunities/JobCard'
import { useGetJobsQuery } from 'store/api';
import LoadingSkeleton from 'components/opportunities/JobSkeleton'
const Opportunities = () => {
    const theme = useTheme();
    const [queryData , setData] = useState({
        Type: 'none',
        Worktype: 'none',
        Grade: 'none',
    });
    const temp = [1,2,3,4,5,6];
    const [query, setquery] = useState("")
    const {data,isLoading} = useGetJobsQuery(query);
    useEffect(()=>{
        let tempQuery = "";
        Object.keys(queryData).forEach((e)=>{
            if(queryData[e]!=='none'){
                tempQuery+=`${e}=${queryData[e]}&`;
            }
        });
        setquery(tempQuery);
    },[queryData])
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
                <Grid item lg={3} sm={12}>
                    <Box sx={{display:'flex', bgcolor: "white",[theme.breakpoints.up("lg")]:{ minHeight: '70vh',m: '7%'}, top: '100px', position: 'sticky', borderRadius: '10px', p: '4%' }}>
                        <FilterVar queryData={queryData} setData={setData}></FilterVar>
                    </Box>
                </Grid>
                <Grid item lg={9} sm={12} container sx={{mt:'20px' }}>
                    {isLoading ? temp?.map((e,key)=>{
                        return(
                            <LoadingSkeleton key={key}></LoadingSkeleton>
                        )
                    }) : data?.map((e,key)=>{
                        return(
                            <JobCard key={key} data={e}></JobCard>
                        )
                    })}
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Opportunities