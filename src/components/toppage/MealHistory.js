import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const styles = {
  MealHistoryText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '18px',
    letterSpacing: '0.15px',
    color: '#FFFFFF'
  }
}

const MealHistory = (props) => {
  return (
    <Box sx={{ 
      height: '234px',
      width: '234px', 
      // bgcolor: '#777777',
      display: 'flex',
      alignItems: 'flex-end',
      }} style={{
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center center",
      }}>
      <Box sx={{
          height: '32px',
          width: '120px', 
          bgcolor: '#FFCC21',
          display:'flex',
          alignItems: 'center',
          pl: '8px',
        }}>
        <Typography style={styles.MealHistoryText}>{props.time}</Typography>
      </Box>
    </Box>
  )

};

export default MealHistory;