import React from 'react'
import { NavLink } from 'react-router-dom'
import style from  './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={style.navbar}>
        <NavLink className={style.nav} to='/'>Home</NavLink>
        <NavLink className={style.nav} to='/search'>Search</NavLink>
        <NavLink className={style.nav} to='/profile'>Profile</NavLink>
    </nav>
  )
}
