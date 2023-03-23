import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Box sx={{ bgcolor: '#414141', height: '128px' }} />
      
    </>
  )
};

export default Layout;