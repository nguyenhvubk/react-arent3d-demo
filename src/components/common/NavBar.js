import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logo from '../../resources/logo.svg';
import icon_challenge from '../../resources/icon_challenge.svg';
import icon_info from '../../resources/icon_info.svg';
import icon_memo from '../../resources/icon_memo.svg';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toRecordOfYourself = () => navigate('/myrecord')
  const toColumnList = () => navigate('column')
  const toHome = () => navigate('/')
  return (
    <Box sx={{ bgcolor: '#414141'}}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex'}}>
          <CssBaseline />
          <AppBar sx={{ boxShadow: 0}} position="static" open={open}>
            <Toolbar sx={{ bgcolor: '#414141'}}>
              <Box sx={{ flexGrow: 2 }}>
                <MenuItem key="record-of-yourself" onClick={toHome}>
                  <img src={logo} alt="logo" width="144" height="64" />  
                </MenuItem>
              </Box>
              <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'space-between', 
                  // bgcolor: '#777777',
                  flexGrow: 1
                }}>
                <MenuItem key="record-of-yourself" onClick={toRecordOfYourself}>
                  <img src={icon_memo} alt="logo" width="32" height="32" />
                  <Typography textAlign="center">自分の記録</Typography>
                </MenuItem>
                <MenuItem key="challenge">
                  <img src={icon_challenge} alt="logo" width="32" height="32" />
                  <Typography textAlign="center">チャレンジ</Typography>
                </MenuItem>
                <MenuItem key="notification">
                  <img src={icon_info} alt="logo" width="32" height="32" />
                  <Typography textAlign="center">お知らせ</Typography>
                </MenuItem>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader sx={{bgcolor: '#777777'}}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </DrawerHeader>
            <List sx={{bgcolor: '#777777'}}>
              <ListItem key="record-of-yourself" disablePadding>
                <ListItemButton>
                  <ListItemText primary="自分の記録" />
                </ListItemButton>
              </ListItem>
              <ListItem key="weight-chart" disablePadding>
                <ListItemButton>
                  <ListItemText primary="体重グラフ" />
                </ListItemButton>
              </ListItem>
              <ListItem key="target" disablePadding>
                <ListItemButton>
                  <ListItemText primary="目標" />
                </ListItemButton>
              </ListItem>
              <ListItem key="selecting-corses" disablePadding>
                <ListItemButton>
                  <ListItemText primary="選択中のコース" />
                </ListItemButton>
              </ListItem>
              <ListItem key="column-list" disablePadding>
                <ListItemButton onClick={toColumnList}>
                  <ListItemText primary="コラム一覧" />
                </ListItemButton>
              </ListItem>
              <ListItem key="setting" disablePadding>
                <ListItemButton>
                  <ListItemText primary="設定" />
                </ListItemButton>
              </ListItem>
              
            </List>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
}