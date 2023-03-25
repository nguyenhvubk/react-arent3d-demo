import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import logo from '../../asset/logo.svg';
import icon_challenge from '../../asset/icon_challenge.svg';
import icon_info from '../../asset/icon_info.svg';
import icon_memo from '../../asset/icon_memo.svg';
import icon_close from '../../asset/icon_close.svg';
import icon_menu from '../../asset/icon_menu.svg';
import '../../style/style.css';


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
  const toColumnList = () => {
    navigate('column');
    setOpen(false);
  }
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
                  <img src={icon_memo} alt="memo" width="32" height="32" />
                  <Typography textAlign="center" sx={{ ml: '10px' }}>自分の記録</Typography>
                </MenuItem>
                <MenuItem key="challenge">
                  <img src={icon_challenge} alt="challenge" width="32" height="32" />
                  <Typography textAlign="center" sx={{ ml: '10px' }}>チャレンジ</Typography>
                </MenuItem>
                <MenuItem key="notification">
                  <img src={icon_info} alt="info" width="32" height="32" />
                  <Typography textAlign="center" sx={{ ml: '10px' }}>お知らせ</Typography>
                </MenuItem>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(open && { display: 'none' }) }}
                >
                  <img src={icon_menu} alt="menu" width="32" height="32" />
                  {/* <MenuIcon /> */}
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
                <img src={icon_close} alt="logo" width="32" height="32" />
              </IconButton>
            </DrawerHeader>
            <List sx={{bgcolor: '#777777'}}>
            <Divider />
              <ListItem key="record-of-yourself" disablePadding>
                <ListItemButton>
                  <ListItemText primary="自分の記録" className='DrawerLink'/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key="weight-chart" disablePadding>
                <ListItemButton>
                  <ListItemText primary="体重グラフ" className='DrawerLink'/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key="target" disablePadding>
                <ListItemButton>
                  <ListItemText primary="目標" className='DrawerLink'/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key="selecting-corses" disablePadding>
                <ListItemButton>
                  <ListItemText primary="選択中のコース" className='DrawerLink'/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key="column-list" disablePadding>
                <ListItemButton onClick={toColumnList}>
                  <ListItemText primary="コラム一覧" className='DrawerLink'/>
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem key="setting" disablePadding>
                <ListItemButton>
                  <ListItemText primary="設定" className='DrawerLink'/>
                </ListItemButton>
              </ListItem>
              
            </List>
          </Drawer>
        </Box>
      </Container>
    </Box>
  );
}