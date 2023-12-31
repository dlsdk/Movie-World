import React from 'react'
import style from './Hero.module.css'
import selectors from 'redux/selectors'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const {TopRated: {selectTopRatedMost}} = selectors

export default function Hero() {

  const mostRated = useSelector(selectTopRatedMost);
  const navigate = useNavigate();

  const handleClick = (id) =>{
    navigate(`/blog/post/${id}`, { state: mostRated  })
  }
  return (
    <>
      {mostRated && (
        <>  <div className={style.hero} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${mostRated.backdrop_path})`}}></div> <div className={style.info}>
              <h1 className={style.title}>{mostRated.title}</h1>
              <p>{mostRated.overview}</p>
              <Button onClick={() => handleClick(mostRated.id)} className={style.detailbutton} type='primary'><span>View Detail</span></Button>
            </div>
          </>
      )}

    </>
  )
}
