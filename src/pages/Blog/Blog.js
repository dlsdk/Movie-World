import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Blog() {
  return (
    <div>
        <ul style={{textAlign:"start"}}>
            <li> <NavLink to='categories'>Categories</NavLink></li>
            <li> <NavLink to='post/:url'>Post</NavLink></li>
        </ul>
    </div>
  )
}
