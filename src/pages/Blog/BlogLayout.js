import React from 'react'
import { Outlet,NavLink} from 'react-router-dom'


export default function BlogLayout() {
  return (
    <>
    <h3>My Blog</h3>
    <Outlet/>
    </>
    
  )
}
