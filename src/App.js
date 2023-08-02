import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './Routes'
import Actions from './redux/actions';
import selectors from './redux/selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const {Popular: {selectPopularList}, TopRated: {selectTopRatedList}, Trend: {selectTrendList}, Genres: {selectGenresList}} = selectors;
const {popularActions: {getPopular}, topRatedActions: {getTopRated}, trendActions: {getTrend}, genresActions: {getGenres}} = Actions


function App() {

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getTopRated())
    dispatch(getTrend());
    dispatch(getGenres());
  },[]) 

  const dispatch = useDispatch();  
  const popularList = useSelector(selectPopularList);
  const topRatedList = useSelector(selectTopRatedList);
  const trendList = useSelector(selectTrendList);
  const genresList = useSelector(selectGenresList);

  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  );
}

export default App;
