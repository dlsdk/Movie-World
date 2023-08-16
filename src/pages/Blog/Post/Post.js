import React, { useEffect } from 'react'
import style from './Post.module.css'
import { useLocation } from 'react-router-dom'
import { Image, Spin } from 'antd';
import MovieInfo from '../../../components/MovieInfo/MovieInfo';
import Reviews from '../../../components/Reviews/Reviews';
import Corousel from '../../../components/Corousel/Corousel';
import { useDispatch , useSelector} from 'react-redux';
import Actions from '../../../redux/actions';
import selectors from '../../../redux/selectors';
import noimage from '../../../images/post/noimage.png'
import AddReview from '../../../components/Reviews/AddReview/AddReview';


const { similarActions: {getSimilarMovies} } = Actions
const { Similar: {selectSimilarMovies,selectSimilarPending} } = selectors

export default function Post() {

  const location = useLocation();
  const movie = location.state;
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getSimilarMovies(movie.id))
    // eslint-disable-next-line 
  }, [movie.id])
  
  const similarList = useSelector(selectSimilarMovies);
  const isSimilarLoading = useSelector(selectSimilarPending);


  //film detay sayfası

return (<>
    {movie && <div className={style.post}>
      <div className={style.detailcontainer}>
        <div className={style.imagediv}>
          <Image className={style.img} preview={false} height={600} width={400} src={movie.poster_path ? `https://image.tmdb.org/t/p/w780${movie.poster_path}` : noimage} />
        </div>
        <div className={style.infocontainer}>
          <MovieInfo movie={movie}/>
          <Reviews id={movie.id}/>
          <AddReview id={movie.id}/>
        </div>
      </div> 
    </div>}

    {isSimilarLoading ?   
      <Spin tip="Loading...">
          <div/>
      </Spin> 
      :
      <Corousel list={similarList} title={"Similar Movies"} /> }
    </>
    
  )
  }
