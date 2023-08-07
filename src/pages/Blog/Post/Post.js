import React from 'react'
import style from './Post.module.css'
import { useLocation } from 'react-router-dom'
import { Image } from 'antd';
import MovieInfo from '../../../components/MovieInfo/MovieInfo';
import Reviews from '../../../components/Reviews/Reviews';


export default function Post() {

  const location = useLocation();
  const movie = location.state;
   
 return (<>
    {movie && <div className={style.post}>
      <div className={style.detailcontainer}>
        <div className={style.imagediv}>
          <Image className={style.img} preview={false} height={600} width={400} src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} />
        </div>
        <div className={style.infocontainer}>
          <MovieInfo movie={movie}/>
          <Reviews id={movie.id}/>
        </div>
      </div>
    </div>}</>
    
  )
  }
