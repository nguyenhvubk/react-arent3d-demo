import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import my_recommend1 from '../../asset/MyRecommend-1.svg';
import my_recommend2 from '../../asset/MyRecommend-2.svg';
import my_recommend3 from '../../asset/MyRecommend-3.svg';



const MyRecommend = () => {
  return (
    <Box sx={{ 
      // bgcolor: '#cfe8fc', 
      height: '288px',
      width: '960px',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between', 
      mt: '56px',
      mb: '56px',
      // flexGrow: 1,
    }}>
      <Button sx={{height: '288px',width: '288px'}}>
        <img src={my_recommend1} alt="my_ecommend_button1"/>
      </Button>
      <Button sx={{height: '288px',width: '288px'}}>
        <img src={my_recommend2} alt="my_recommend_button2"/>
      </Button>
      <Button sx={{height: '288px',width: '288px'}}>
        <img src={my_recommend3} alt="my_recommend_button3"/>
      </Button>
    </Box>
  )
};

export default MyRecommend;