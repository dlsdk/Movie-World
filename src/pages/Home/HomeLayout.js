import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar/Navbar'
import style from './Home.module.css'

export default function HomeLayout() {
  return (
    <div className={style.home}>
        <Navbar/>
        <Outlet/>
    </div>
    
  )
}
