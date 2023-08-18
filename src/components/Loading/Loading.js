import React from 'react'
import style from './Loading.module.css'
import { LoadingOutlined } from '@ant-design/icons'

export default function Loading() {
  return (
    <div className={style.loading}>
        <h1 className={style.title}>Loading...</h1>
        <LoadingOutlined className={style.icon} spin/>
    </div>
  )
}
