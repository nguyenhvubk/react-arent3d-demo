import loadmorebutton from '../../asset/load_more.svg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const styles = {
  buttonImage: {
    width: '296px',
    height: "56px",
    backgroundImage: `url(${loadmorebutton})`
  },
  text: {
    fontFamily: 'Hiragino Kaku Gothic Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '26px',
    color: '#FFFFFF',
  }
};

const LoadMoreButton = (props) => {
  return (
    <Box sx={{ 
      height: '15vh',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center', 
      }}>
      <Button style={styles.buttonImage}>
        {/* <img src={loadmorebutton} alt="filter_button1" width="296px" height="56px" /> */}
        <Typography textAlign="center" style={styles.text}>{props.text}</Typography>
      </Button>
    </Box>
    
  )

};

export default LoadMoreButton;