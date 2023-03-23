import MainPhoto from "../components/toppage/MainPhoto";
import Graph from "../components/toppage/Graph";
import Filters from "../components/toppage/Filters";
import Records from "../components/toppage/Records";
import LoadMoreButton from "../components/common/LoadMoreButton";
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
        <Grid item xs={4}>
          <Box sx={{ bgcolor: '#cfe8fc', height: '312px' }} >
            <MainPhoto />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ bgcolor: '#2E2E2E', height: '312px' }}>
            <Graph />
          </Box>

        </Grid>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
      <Container maxWidth="md">
        <Filters />
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfd8fc', height: '60vh' }} />
      </Container>
      <Container maxWidth="xs">
        <LoadMoreButton text="記録をもっと見る" />
      </Container>
    </div>
  )
};

export default TopPage;