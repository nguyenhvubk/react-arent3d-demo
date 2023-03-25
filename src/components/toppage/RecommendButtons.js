import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import recommend_button1 from '../../asset/recommend_button1.svg';
import recommend_button2 from '../../asset/recommend_button2.svg';
import recommend_button3 from '../../asset/recommend_button3.svg';
import recommend_button4 from '../../asset/recommend_button4.svg';


const RecommendButtons = () => {
  return (
    <Box sx={{ 
      // bgcolor: '#cfe8fc', 
      height: '144px',
      width: '960px',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between', 
      // flexGrow: 1,
    }}>
      <Button sx={{height: '144px',width: '216px'}}>
        <img src={recommend_button1} alt="recommend_button1"/>
      </Button>
      <Button sx={{height: '144px',width: '216px'}}>
        <img src={recommend_button2} alt="recommend_button2"/>
      </Button>
      <Button sx={{height: '144px',width: '216px'}}>
        <img src={recommend_button3} alt="recommend_button3"/>
      </Button>
      <Button sx={{height: '144px',width: '216px'}}>
        <img src={recommend_button4} alt="recommend_button4"/>
      </Button>
    </Box>
  )
};

export default RecommendButtons;