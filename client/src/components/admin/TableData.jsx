import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box,Button } from "@mui/material"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const dateConveter = (date) => {
    const inputDate = date;
    const dateObject = new Date(inputDate);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
    return formattedDate;
}

export default function TableData({ data,updateJob }) {
    const handleClick=(id,status)=>{
        const data = {
            id:id,
            query:`status=${status}`
        }
        updateJob(data);
    }
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
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <StyledTableRow key={item._id}>
                            <StyledTableCell component="th" scope="row">
                                {item?.Company}
                            </StyledTableCell>
                            <StyledTableCell align="left">{item?.Role}</StyledTableCell>
                            <StyledTableCell align="left">{item?.Location}</StyledTableCell>
                            <StyledTableCell align="left">{item?.Type}</StyledTableCell>
                            <StyledTableCell align="left">{item?.Worktype}</StyledTableCell>
                            <StyledTableCell align="left">{dateConveter(item?.LastDate)}</StyledTableCell>
                            <StyledTableCell align="left"><a target='_blank' rel="noopener noreferrer" href={item?.Link}>Click here</a></StyledTableCell>
                            <StyledTableCell align="left">
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    {item?.Grade?.map((e, key) => {
                                        return <Box key={key} sx={{ m: '5px' }}>{e}</Box>
                                    })}
                                </Box>
                            </StyledTableCell>
                            <StyledTableCell align="left">See Skill</StyledTableCell>
                            <StyledTableCell align="right">
                                <Button size='small' variant='outlined' color='success' onClick={()=>handleClick(item._id,"verified")} sx={{textTransform:'capitalize',mr:'3px'}}>Verify</Button>
                                <Button size='small' variant='outlined' color='error' onClick={()=>handleClick(item._id,"rejected")} sx={{textTransform:'capitalize', ml:'3px'}} >Reject</Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}