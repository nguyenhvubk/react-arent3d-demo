import RecommendButtons from '../components/toppage/RecommendButtons';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoadMoreButton from "../components/common/LoadMoreButton";
import ColumnItem from "../components/column/ColumnItem";
import column1 from '../asset/column-1.jpg';
import column2 from '../asset/column-2.jpg';
import column3 from '../asset/column-3.jpg';
import column4 from '../asset/column-4.jpg';
import column5 from '../asset/column-5.jpg';
import column6 from '../asset/column-6.jpg';
import column7 from '../asset/column-7.jpg';
import column8 from '../asset/column-8.jpg';

const columnData = [
  [
    {
      img: column1,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
    {
      img: column2,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
    {
      img: column3,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
    {
      img: column4,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
  ], 
  [
    {
      img: column5,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
    {
      img: column6,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
    {
      img: column7,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
    {
      img: column8,
      date: '2021.05.17',
      time: '23:25',
      desc: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtag: [
        '#魚料理',  '#和食',  '#DHA'
      ]
    },
  ]
];

const Column = () => {
  return (
    <div>
      
      <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center', mt: '56px', mb: '56px'}}>
        <RecommendButtons />
      </Container>
      {columnData.map((column) => (
        <Container maxWidth='lg' sx={{display: 'flex', justifyContent: 'center'}}>
          {column.map((meal) => (
            <ColumnItem img={`${meal.img}`} date={meal.date} time={meal.time} desc={meal.desc} hashtag={meal.hashtag}/>
          ))}
        </Container>
      ))}
      <Container maxWidth="xs">
        <LoadMoreButton text="コラムをもっと見る" />
      </Container>
      
    </div>
  )
};

export default Column;