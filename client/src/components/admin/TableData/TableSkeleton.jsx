import React from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Skeleton from '@mui/material/Skeleton';
import { theme } from 'theme';
export default function TableData() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{bgcolor:theme.palette.secondary.main}}>
          <TableRow>
            <TableCell sx={{color:'white'}}>Company</TableCell>
            <TableCell align="right"sx={{color:'white'}}>Role</TableCell>
            <TableCell align="right" sx={{color:'white'}}>Location</TableCell>
            <TableCell align="right" sx={{color:'white'}}>Type</TableCell>
            <TableCell align="right" sx={{color:'white'}}>WorkType</TableCell>
            <TableCell align="right" sx={{color:'white'}}>LastDate</TableCell>
            <TableCell align="right" sx={{color:'white'}}>Link</TableCell>
            <TableCell align="right" sx={{color:'white'}}>Grade</TableCell>
            <TableCell align="right" sx={{color:'white'}}>Skills</TableCell>
            <TableCell align="right" sx={{color:'white'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
                <TableCell align="right">
                  <Skeleton variant="text" />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
