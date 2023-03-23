import MainPhoto from "../components/toppage/MainPhoto";
import Graph from "../components/toppage/Graph";
import Filters from "../components/toppage/Filters";
import Records from "../components/toppage/Records";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MyRecord = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '30vh' }} />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfd8fc', height: '30vh' }} />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfdefc', height: '30vh' }} />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfd8fc', height: '60vh' }} />
      </Container>
      
    </div>
  )
};

export default MyRecord;