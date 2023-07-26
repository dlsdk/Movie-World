import React from 'react'
import { Route,Routes } from 'react-router-dom'
import BlogLayout from '../pages/Blog/BlogLayout'
import Home from '../pages/Home/Home'
import Contact from '../pages/Contact/Contact'
import Categories from '../pages/Blog/Categories'
import Blog from '../pages/Blog/Blog'
import Post from '../pages/Blog/Post'
import Page404 from '../pages/Page404/Page404'
import BlogPage404 from '../pages/Blog/BlogPage404'
import Profile from '../pages/Profile/Profile'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import AuthLayout from '../pages/Auth/AuthLayout'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import HomeLayout from '../pages/Home/HomeLayout'

export default function RoutePage() {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomeLayout/>}>
                <Route index={true} element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='blog' element={<BlogLayout/>}> 
                    <Route index={true} element={<Blog/>}/>
                    <Route path='categories' element={<Categories/>}/>
                    <Route path='post/:url' element={<Post/>}/>
                    <Route path='*' element={<BlogPage404/>}/> 
                </Route>
                <Route path='profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
            </Route>
            <Route path='/auth' element={<AuthLayout/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
            </Route>
            <Route path='*' element={<Page404/>}/>
        </Routes>  
    </>
  )
}
