import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Avatar} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Logout,AccountCircle} from '@mui/icons-material'
import { useLogoutMutation } from 'store/api';
import { useDispatch } from 'react-redux';
import { setUser } from 'store';
import { toast } from 'react-toastify';
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 150,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus({setisLoggedIn}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);
    const [logout] = useLogoutMutation();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = async () => {
        logout().then((data)=>{
            dispatch(setUser(null));
            setAnchorEl(null);
            setisLoggedIn(false);
            toast.success("Logged out successfully");
        }).catch((err)=>{     
            toast.error("Something went wrong");     
            console.log(err);
            setAnchorEl(null);
        })
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }
    return (
        <div>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" onClick={handleClick}/>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disableRipple>
                    <AccountCircle/>
                    My Profile
                </MenuItem>
                <MenuItem onClick={handleLogout} disableRipple>
                    <Logout />
                    Logout
                </MenuItem>
            </StyledMenu>
        </div>
    );
}
