import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Link from '@mui/material/Link';
import '../../style/style.css';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#414141', height: '128px' }}>
      <Container sx={{
        width: '1000px',
        height: '128px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <Link href="#" underline='hover' sx={{mr: '23px'}} className="FooterLink">{'会員登録'}</Link>
        <Link href="#" underline='hover' sx={{mr: '23px', ml: '23px'}} className="FooterLink">{'運営会社'}</Link>
        <Link href="#" underline='hover' sx={{mr: '23px', ml: '23px'}} className="FooterLink">{'利用規約'}</Link>
        <Link href="#" underline='hover' sx={{mr: '23px', ml: '23px'}} className="FooterLink">{'個人情報の取扱について'}</Link>
        <Link href="#" underline='hover' sx={{mr: '23px', ml: '23px'}} className="FooterLink">{'特定商取引法に基づく表記'}</Link>
        <Link href="#" underline='hover' sx={{mr: '23px', ml: '23px'}} className="FooterLink">{'お問い合わせ'}</Link>


      </Container>
    </Box>
  )

};

export default Footer;