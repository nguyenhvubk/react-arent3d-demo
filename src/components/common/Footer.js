import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const styles = {
  FooterLink: {
    fontFamily: 'Hiragino Kaku Gothic Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '11px',
    lineHeight: '16px',
    letterSpacing: '0.033px',
    color: '#FFFFFF',
  }
  
};

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
        <Link href="#" underline='hover' sx={{mr: '45px'}} style={styles.FooterLink}>{'会員登録'}</Link>
        <Link href="#" underline='hover' sx={{mr: '45px'}} style={styles.FooterLink}>{'運営会社'}</Link>
        <Link href="#" underline='hover' sx={{mr: '45px'}} style={styles.FooterLink}>{'利用規約'}</Link>
        <Link href="#" underline='hover' sx={{mr: '45px'}} style={styles.FooterLink}>{'個人情報の取扱について'}</Link>
        <Link href="#" underline='hover' sx={{mr: '45px'}} style={styles.FooterLink}>{'特定商取引法に基づく表記'}</Link>
        <Link href="#" underline='hover' sx={{mr: '45px'}} style={styles.FooterLink}>{'お問い合わせ'}</Link>
      </Container>
    </Box>
  )

};

export default Footer;