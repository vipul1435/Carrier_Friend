import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Box} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet } from 'react-router-dom';
import { Verified, Pending, DataThresholding, GppBad, Menu, MenuOpen } from '@mui/icons-material';
import sidebarItem from 'components/admin/sidebarItem';
import { useNavigate } from 'react-router-dom';
import {useMediaQuery} from '@mui/material';
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
    const navigate= useNavigate();
    const theme = useTheme();
    var matches = useMediaQuery(theme.breakpoints.down('lg'));
    const [open, setOpen] = React.useState(true);
    const handleDrawer = () => {
        setOpen(!open);
    };

    React.useEffect(()=>{
        if(matches){
            setOpen(false);
        } else {
            setOpen(true);
        }
    },[matches])

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" open={open} PaperProps={{sx:{ bgcolor:theme.palette.background.main}}} >
                <DrawerHeader >
                    {open && <Typography sx={{ mx: "auto", fontSize: '20px', fontWeight: 'bold' }}>DashBoard</Typography>}
                    <IconButton onClick={handleDrawer}>
                        {open ? <MenuOpen sx={{ color: theme.palette.primary.main }} /> : <Menu sx={{ color: theme.palette.primary.main }} />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {sidebarItem.map((item, key) => (
                        <ListItem key={key} disablePadding>
                            <ListItemButton onClick={()=>navigate(item.path)}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    mx: open ? 2.5 : 1.5,
                                    my: 0.3,
                                    borderRadius: 3,
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
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
    );
}