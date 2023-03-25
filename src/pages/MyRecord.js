import Graph from "../components/toppage/Graph";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoadMoreButton from '../components/common/LoadMoreButton';
import MyRecommend from "../components/myrecord/MyRecommend";
import MyExercise from "../components/myrecord/MyExercise";
import { Typography } from "@mui/material";
import MyDairy from "../components/myrecord/MyDairy";


const dairy = [
  {
    date: '2021.05.21',
    time: '23:25',
    text: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  }, 
  {
    date: '2021.05.21',
    time: '23:25',
    text: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.21',
    time: '23:25',
    text: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.21',
    time: '23:25',
    text: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.21',
    time: '23:25',
    text: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  }
]


const MyRecord = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center'}}>
        <MyRecommend />
      </Container>
      <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{ bgcolor: '#2E2E2E', height: '312px', width: '960px' }}>
            <Graph />
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', mb: '56px', mt: '56px'}}>
        <MyExercise />
      </Container>

      <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{width: '960px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
          <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
            <Typography>MY DAIRY</Typography> 
          </Box>
          <Box sx={{ width: '960px',bgcolor: '#cfd8fc', height: '30vh' }}>
            aaaa
          </Box>
        </Box>
      </Container>
      

      <Container maxWidth="xs">
        <LoadMoreButton text="自分の日記をもっと見る" />
      </Container>
      
    </div>
  )
};

export default MyRecord;