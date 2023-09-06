import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box, Button, CircularProgress } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import { Verified, Pending, GppBad } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setClick } from 'store';
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


const RowData = ({ item, updateJob, clickedData }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const [isClicked, setIsClicked] = React.useState(false);
    const handleClick = async (id, status) => {
        setIsClicked(true);
        const data = {
            id: id,
            query: `status=${status}`
        }
        await updateJob(data).then((res) => {
            setIsClicked(false);
            dispatch(setClick({ ...clickedData, [id]: status }));
        }).catch((err) => {
            setIsClicked(false);
        });
    }
    return (
        <StyledTableRow>
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
            <StyledTableCell align="left">See Skills</StyledTableCell>
            <StyledTableCell align="center">
                {item.status === 'verified' && <Verified sx={{ color: "green" }} />}
                {item.status === 'pending' && <Pending sx={{ color: theme.palette.primary.main }} />}
                {item.status === 'rejected' && <GppBad sx={{ color: "red" }} />}
            </StyledTableCell>

            <StyledTableCell align="right">
                {(clickedData && clickedData[item._id] !== undefined) ? <Button disabled size='small' variant='contained' color='success' sx={{ textTransform: 'capitalize', mr: '3px' }}>{clickedData[item._id]}</Button> : <>
                    {(item.status === "pending" || item.status === "rejected") && <Button size='small' variant='outlined' color='success' onClick={() => handleClick(item._id, "verified")} sx={{ textTransform: 'capitalize', mr: '3px' }}>{isClicked ? <CircularProgress size={23} color='success' /> : "Verify"}</Button>}
                    {(item.status === "pending" || item.status === "verified") && <Button size='small' variant='outlined' color='error' onClick={() => handleClick(item._id, "rejected")} sx={{ textTransform: 'capitalize', ml: '3px' }} >{isClicked ? <CircularProgress size={23} color='error' /> : "Reject"}</Button>}</>}
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default RowData