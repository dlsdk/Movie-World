import React from 'react'
import style from './CardC.module.css'
import { Image, Card } from 'antd'
import { useNavigate } from 'react-router-dom'
import noimage from 'images/post/noimage.png'

export default function CardC({index,listElement}) {

  const navigate = useNavigate();

  return (
    <Card className={style.cards} key={index} onClick={() => navigate(`/blog/post/${listElement.id}`, { state: listElement })}>
    <Image preview={false}
      className={style.images}
      alt="example"
      src={listElement.poster_path ? `https://image.tmdb.org/t/p/w780${listElement.poster_path}` : noimage}
    />
    <h3 className={style.title}>{listElement.title}</h3>
  </Card>
  )
}
