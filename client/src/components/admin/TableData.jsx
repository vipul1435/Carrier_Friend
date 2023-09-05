import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowData from './RowData';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export default function TableData({ data,updateJob }) {   
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Company</StyledTableCell>
                        <StyledTableCell align="left">Role</StyledTableCell>
                        <StyledTableCell align="left">Location</StyledTableCell>
                        <StyledTableCell align="left">Type</StyledTableCell>
                        <StyledTableCell align="left">WorkType</StyledTableCell>
                        <StyledTableCell align="left">LastDate</StyledTableCell>
                        <StyledTableCell align="left">Link</StyledTableCell>
                        <StyledTableCell align="left">Grade</StyledTableCell>
                        <StyledTableCell align="left">Skills</StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <RowData item={item} key={item._id} updateJob={updateJob}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}