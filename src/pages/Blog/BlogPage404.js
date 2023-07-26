import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogPage404() {
  return (
    <div>
         <h1>Error 404 Blog Page Not Found</h1>
        <Link to='/blog'>Return to Blog</Link>
    </div>
  )
}
