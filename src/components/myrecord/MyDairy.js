import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const styles = {
  DairyDateTime: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '22px',
    letterSpacing: '0.09px',
    color: '#414141',
  },
  DairyText: {
    fontFamily: 'Hiragino Kaku Gothic Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '17px',
    letterSpacing: '0.06px',
    color: '#414141',
  }
};

const MyDairy = (props) => {
  return (
    <Box sx={{
      background: '#FFFFFF',
      border: '2px solid #707070',
      width: '231px',
      height: '231px',
      p: '16px',
      mr: '12px',
      mb: '12px',
      overflow: 'auto' 
    }}>
      <Typography>{props.date}</Typography>
      <Typography>{props.time}</Typography>
      <Typography style={styles.DairyText} sx={{mt: '8px'}}>{props.text}</Typography>
    </Box>
  )

};

export default MyDairy;