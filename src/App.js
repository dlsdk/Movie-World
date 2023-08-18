import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from 'Routes'
import Actions from 'redux/actions';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';

const {
  popularActions: {getPopular}, 
  topRatedActions: {getTopRated}, 
  trendActions: {getTrend}, 
  genresActions: {getGenres}
} = Actions


function App() {
 
  const dispatch = useDispatch();  
 
  useEffect(() => {
    dispatch(getPopular());
    dispatch(getTopRated())
    dispatch(getTrend());
    dispatch(getGenres());
    // eslint-disable-next-line
  },[]) 

  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  );
}

export default App;
