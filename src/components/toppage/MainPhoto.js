import { Box } from '@mui/system';
import main_photo from '../../asset/main_photo.png';

const MainPhoto = () => {
  return (
    <>
      <Box sx={{ 
        bgcolor: '#cfe8fc', 
        height: '312px' ,
        backgroundImage: `url(${main_photo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: "center center",
        }}>
      </Box>
    </>
    
  );
};

export default MainPhoto;