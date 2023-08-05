import React from 'react'
import style from './Post.module.css'
import { useLocation } from 'react-router-dom'
import { Image } from 'antd';
import Rating from 'react-rating-stars-component';

export default function Post() {

  const location = useLocation();
  const movie = location.state;
  console.log("Movie",movie);

  return (
    <div className={style.post}>
      <h1 className={style.title}>{movie.title}</h1>
      <div className={style.detailcontainer}>
        <div className={style.imagediv}>
          <Image className={style.img} preview={false} height={500} width={400} src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} />
        </div>
        <div className={style.info}>
        <Rating
        count={10}f
        value={Math.floor(movie.vote_average)}
        edit={false}
        size={24}
        activeColor="#ffd700"
      />
        </div>
      </div>
    </div>
  )
}
