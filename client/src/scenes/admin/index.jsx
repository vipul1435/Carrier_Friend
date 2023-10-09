import { DataThresholding, GppBad, Logout, Menu, MenuOpen, Pending, Verified } from '@mui/icons-material';
import { Box, useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import img from 'assets/logo.png';
import sidebarItem from 'components/admin/sidebarItem';
import * as React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'store/api';
import { setUser } from 'store';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Admin() {
    const navigate = useNavigate();
    const theme = useTheme();
    var matches = useMediaQuery(theme.breakpoints.down('lg'));
    const [open, setOpen] = React.useState(true);
    const handleDrawer = () => {
        setOpen(!open);
    };
    const location = useLocation();
    const [active, setActive] = React.useState(location.pathname);
    React.useEffect(() => {
        setActive(location.pathname);
        if (matches) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [matches,location.pathname])
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();
    const handleLogout = async () => {
        logout().then((data)=>{
            dispatch(setUser(null));
            toast.success("Logged out successfully");
            navigate('/auth');
        }).catch((err)=>{     
            toast.error("Something went wrong");     
        })
    }

    return (
        <Box sx={{ display: 'flex',height:'100%' }}>
            <Drawer variant="permanent" open={open} PaperProps={{ sx: { bgcolor: theme.palette.background.main } }} >
                <DrawerHeader >
                    {open && <Typography component={'span'} sx={{ mx: "auto", fontSize: '20px', fontWeight: 'bold' }}>DashBoard</Typography>}
                    <IconButton onClick={handleDrawer}>
                        {open ? <MenuOpen sx={{ color: theme.palette.primary.main }} /> : <Menu sx={{ color: theme.palette.primary.main }} />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {sidebarItem.map((item, key) => (
                        <ListItem key={key} disablePadding>
                            <ListItemButton onClick={() => navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    mx: open ? 2.5 : 1.5,
                                    my: 0.7,
                                    borderRadius: 3,
                                    ":hover": {bgcolor:'#B0DAFF'},
                                    bgcolor: active === item.path ? "#8EACCD" : '#E3F4F4',
                                    border:'1px solid #B9E9FC'
                                }}
                                >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon === 'Verified' && <Verified sx={{ color: "green" }} />}
                                    {item.icon === 'Pending' && <Pending sx={{ color: theme.palette.primary.main }} />}
                                    {item.icon === 'DataThresholding' && <DataThresholding sx={{ color: "#40F8FF" }} />}
                                    {item.icon === 'GppBad' && <GppBad sx={{ color: "red" }} />}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Box
                    component={'img'}
                    src={img}
                    loading='lazy'
                    alt='logo'
                />
                <List>
                        <ListItem  disablePadding>
                            <ListItemButton onClick={handleLogout}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    mx: open ? 2.5 : 1.5,
                                    my: 0.7,
                                    borderRadius: 3,
                                    ":hover": {bgcolor:theme.palette.admin.main[2]},
                                    bgcolor: theme.palette.admin.main[2],
                                    border:'1px solid #B9E9FC'
                                }}
                                >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 1 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                     <Logout sx={{ color: "white" , fontSize:'25px',fontWeight:'bold'}} />
                                </ListItemIcon>
                                <ListItemText primary="Logout Admin" sx={{ opacity: open ? 1 : 0, fontWeight:'bold',color:'white' }} />
                            </ListItemButton>
                        </ListItem>
                   
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
}