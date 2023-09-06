import { Box, Grid,Paper } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import UserCard from 'components/admin/statics/UserCard';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Statics = () => {
  return (
    <Box sx={{ height: "100%", width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={5}>
          <Item elevation={3}>
          <UserCard/>
          </Item>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Item>xs=12 lg=4</Item>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Item>xs=12 lg=4</Item>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Item>xs=12 lg=8</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Statics