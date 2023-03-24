import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from "../components/common/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      
    </>
  )
};

export default Layout;