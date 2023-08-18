import React from 'react'
import Hero from 'components/Hero/Hero';
import Corousel from 'components/Corousel/Corousel';
import selectors from 'redux/selectors';
import { useSelector } from 'react-redux';

const {
  Popular:{selectPopularList} , 
  TopRated: {selectTopRatedList}, 
  Trend: {selectTrendList}
} = selectors;

export default function Home() { 

  const topRatedList = useSelector(selectTopRatedList);
  const popularList = useSelector(selectPopularList);
  const trendList = useSelector(selectTrendList);
  
  return (
    <div>
      <Hero/>
      <Corousel list={popularList} title="POPULAR"/>
      <Corousel list={topRatedList} title='TOP RATED'/>
      <Corousel list={trendList} title='TRENDS'/>
    </div>
    

  )
}
