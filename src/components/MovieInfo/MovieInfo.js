import React from 'react'
import style from './MovieInfo.module.css'
import selectors from '../../redux/selectors'
import helpers from '../../helpers'
import { useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Actions from '../../redux/actions';
import {Avatar, List} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import VirtualList from 'rc-virtual-list';

const {getGenresNameById} = helpers
const {Genres: {selectGenresList}} = selectors

export default function MovieInfo({movie}) {
    const genresList = useSelector(selectGenresList);
    const movieGenreList = getGenresNameById(genresList,movie?.genre_ids);
  
  return (
    <>
        <h1 className={style.title}>{movie.title}</h1>
          <div className={style.info}>
            <div className={style.ratingcontainer}>
                <Rating value={movie.vote_average.toFixed(1)} size='medium' readOnly precision={0.1} max={10}  sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconEmpty': {color: 'orange',}}} />
                <p className={style.ratinginfo}>({movie.vote_average.toFixed(1)})</p>
            </div>
            <p>{movie.overview}</p>
            <ul  className={style.ul}>
              { movieGenreList && movieGenreList.map((listElement, index) => (
                <li className={style.genrelist} key={index}>{listElement}</li>
              ))}
            </ul>
          
          </div>
    </>
  )
}
