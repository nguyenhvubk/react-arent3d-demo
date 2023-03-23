import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import filter_button1 from '../../asset/filter_button1.svg';
import filter_button2 from '../../asset/filter_button2.svg';
import filter_button3 from '../../asset/filter_button3.svg';
import filter_button4 from '../../asset/filter_button4.svg';

const Filters = () => {
  return (
    <Box sx={{ 
      bgcolor: '#cfe8fc', 
      height: '150px',
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between', 
      // bgcolor: '#777777',
      flexGrow: 1
    }}>
      <Button>
        <img src={filter_button1} alt="filter_button1" width="134" height="116px" />
      </Button>
      <Button>
        <img src={filter_button2} alt="filter_button2" width="134" height="116px" />
      </Button>
      <Button>
        <img src={filter_button3} alt="filter_button3" width="134" height="116px" />
      </Button>
      <Button>
        <img src={filter_button4} alt="filter_button4" width="134" height="116px" />
      </Button>
    </Box>
  )
};

export default Filters;