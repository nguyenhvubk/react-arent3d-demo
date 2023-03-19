import DateRate from "../components/toppage/DateRate";
import Chart from "../components/toppage/Chart";
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


const TopPage = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          {/* <Item>xs=3</Item> */}
          <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
        </Grid>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '30vh' }} />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfd8fc', height: '60vh' }} />
      </Container>
      <Container maxWidth="xs">
        <Box sx={{ bgcolor: '#cfdefc', height: '15vh' }} />
      </Container>
    </div>
  )
};

export default TopPage;