import { Box } from '@mui/system';

const styles = {
  backgroundImage: {
    width: '234px',
    height: "234px",
    backgroundImage: `url(${props.img})`
  }
};

const MealHistory = (props) => {
  return (
    <Box sx={{ 
      height: '234px',
      width: '234px', 
      bgcolor: '#777777'
      }}>
      <img src={props.img} alt="mealHistory" width='234px' height='234px' />
    </Box>
  )

};

export default MealHistory;