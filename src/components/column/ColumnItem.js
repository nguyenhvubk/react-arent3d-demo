import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';

const styles = {
  MealHistoryText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '30px',
    // letterSpacing: '0.15px',
    color: '#FFFFFF'
  },
  MealDescription: {
    fontFamily: 'Hiragino Kaku Gothic Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '15px',
    lineHeight: '22px',
    letterSpacing: '0.075px',
    color: '#414141'
  },
  MealHashTag: {
    fontFamily: 'Hiragino Kaku Gothic Pro',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '12px',
    lineHeight: '22px',
    /* or 183% */
    letterSpacing: '0.06px',
    color: '#FF963C',
    mr: '10px',
  }
}

const ColumnItem = (props) => {
  // const tags = [props.hashtag];
  return (
    <Box sx={{ 
      height: '222px',
      width: '234px', 
      // bgcolor: '#777777',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      m: '4px'
      }}>
      <Box sx={{
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center center",
        display: 'flex',
        alignItems: 'flex-end',
        height: '144.47px',
        width: '234px', 
        bgcolor: '#FFCC21',

      }}>
        <Box sx={{
          height: '24px',
          width: '144px', 
          bgcolor: '#FFCC21',
          display:'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pl: '8px',
          pr: '8px',
        }}>
          <Typography style={styles.MealHistoryText}>{props.date}</Typography>
          <Typography style={styles.MealHistoryText}>{props.time}</Typography>
        </Box>  
      </Box>
      <Box sx={{mt: '8px'}}>
        <Typography style={styles.MealDescription}>{props.desc}</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center',
        width: '234px', 
      }}>
        {props.hashtag?.map((tag) => (
          // <Typography style={styles.MealDescription}>{tag}</Typography>
          <Link href="#" underline='hover' sx={{mr: '10px'}} style={styles.MealHashTag}>{tag}</Link>
        ))}
      </Box>
    </Box>
  )

};

export default ColumnItem;