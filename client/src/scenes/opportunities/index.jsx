import { useTheme } from '@emotion/react'
import { Box, Card, Paper } from '@mui/material'
import React from 'react'

const Opportunities = () => {
  const theme = useTheme()
  return (
    <Paper sx={{
      position: 'relative',
      top: '100px',
      display: 'flex',
      width: '95%',
      marginX: 'auto',
      bgcolor: theme.palette.background.main,
      flexWrap: 'wrap',
      flexDirection: 'row',
      // justufyContent: 'center',
    }}>
      <Card elevation='0' sx={{
        top: '100px',
        position: 'sticky',
        bgcolor: "white",
        minWidth: "320px",
        height: "80vh",
        margin: "20px",
      }}>
      </Card>
      <Box
        sx={{
          width: '70vw',
          marginY: "15px",
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // bgcolor: theme.palette.secondary.main,
        }}
      >
       <Card sx={{
          bgcolor: "white",
          minWidth: "320px",
          height: "200px",
          margin: "10px",
        }}></Card> <Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card> <Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card><Card sx={{
          bgcolor:"white",
          minWidth:"320px",
          height:"200px",
          margin:"5px",
        }}></Card>
      </Box>
    </Paper>
  )
}

export default Opportunities