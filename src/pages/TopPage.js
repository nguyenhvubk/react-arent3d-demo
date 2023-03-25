import MainPhoto from "../components/toppage/MainPhoto";
import Graph from "../components/toppage/Graph";
import Filters from "../components/toppage/Filters";
import LoadMoreButton from "../components/common/LoadMoreButton";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import MealHistory from "../components/toppage/MealHistory";
import s01 from '../asset/s01.jpg';
import d01 from '../asset/d01.jpg';
import d02 from '../asset/d02.jpg';
import l01 from '../asset/l01.jpg';
import l02 from '../asset/l02.jpg';
import l03 from '../asset/l03.jpg';
import m01 from '../asset/m01.jpg';
import m02 from '../asset/m02.jpg';
import m03 from '../asset/m03.jpg';


const mealHirotyData = [
  [
    {
      img: m01,
      date: '05.21.Morning'
    },
    {
      img: l01,
      date: '05.21.Lunch'
    },
    {
      img: d01,
      date: '05.21.Dinner'
    },
    {
      img: s01,
      date: '05.21.Snack'
    },
  ], 
  [
    {
      img: m02,
      date: '05.20.Morning'
    },
    {
      img: l02,
      date: '05.20.Lunch'
    },
    {
      img: d02,
      date: '05.20.Dinner'
    },
    {
      img: s01,
      date: '05.20.Snack'
    },
  ]
];


const TopPage = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <MainPhoto />
        </Grid>
        <Grid item xs={8}>
          <Graph />
        </Grid>
      </Grid>
      <Container maxWidth='md'>
        <Filters />
      </Container>
      {mealHirotyData.map((day) => (
        <Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'center'}}>
          {day.map((meal) => (
          <MealHistory img={`${meal.img}`} time={meal.date} />
          ))}
        </Container>
      ))}
      <Container maxWidth="xs">
        <LoadMoreButton text="記録をもっと見る" />
      </Container>
    </div>
  )
};

export default TopPage;