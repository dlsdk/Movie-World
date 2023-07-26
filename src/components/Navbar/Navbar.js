import React from 'react'
import { NavLink } from 'react-router-dom'
import style from  './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <NavLink className={style.nav} to='/'>Home</NavLink>
        <NavLink className={style.nav} to='/contact'>Contact</NavLink>
        <NavLink className={style.nav} to='/blog'>Blog</NavLink>
        <NavLink className={style.nav} to='/profile'>Profile</NavLink>
    </nav>
  )
}
