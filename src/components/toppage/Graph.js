import main_graph from '../../asset/main_graph.svg';
import { Box } from '@mui/system';

const Graph = () => {
  return (
    <Box sx={{ 
      bgcolor: '#2E2E2E', 
      height: '312px',
      display: 'flex',
      alignItems: 'center',
      pl: '20px',
      overflow: 'auto'
      }}>
      <img src={main_graph} alt="graph" width="589px" height="293.62px" />
    </Box>
    
  )

};

export default Graph;