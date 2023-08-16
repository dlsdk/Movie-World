import React from 'react'
import { Link } from 'react-router-dom'
import style from './BlogPage404.module.css'

export default function BlogPage404() {
  return (
    <div className={style.blogerror}>
         <h1>Error 404 Blog Page Not Found</h1>
        <Link to='/'>Return to Home</Link>
    </div>
  )
}
