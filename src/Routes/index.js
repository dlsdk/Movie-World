import React from 'react'
import Loading from 'components/Loading/Loading'
const Home =  React.lazy(() =>  import('pages/Home/Home'))
const Search = React.lazy(() => import('pages/Search/Search'))
const Post = React.lazy(() => import('pages/Blog/Post/Post'))
const Profile = React.lazy(() => import('pages/Profile/Profile'))
const Login = React.lazy(() => import('pages/Auth/Login.js'))
const Register = React.lazy(() => import('pages/Auth/Register.js'))
const BlogLayout = React.lazy(() => import('pages/Blog/BlogLayout'))
const Page404 = React.lazy(() => import('pages/Page404/Page404'))
const HomeLayout = React.lazy(() => import('pages/Home/HomeLayout'))
const AuthLayout = React.lazy(() => import('pages/Auth/AuthLayout'))
const PrivateRoute = React.lazy(() => import('./PrivateRoute/PrivateRoute'))
const BlogPage404 = React.lazy(() => import('pages/Blog/BlogPage404'))



const routes = [
    {
        path:'/',
        element: <React.Suspense fallback={<Loading/>}><HomeLayout/></React.Suspense>,
        children: [
            {
                index: true,
                element:  <React.Suspense fallback={<Loading/>}><Home/></React.Suspense>
            },
            {
                auth: true,
                path: 'search',
                element:  <React.Suspense fallback={<Loading/>}> <Search/></React.Suspense>
            },
            {
                path: 'blog',
                element: <React.Suspense fallback={<Loading/>}><BlogLayout/></React.Suspense> ,
                auth: true,
                children: [
                    {
                        path:'post/:url',
                        element: <React.Suspense fallback={<Loading/>}><Post/></React.Suspense> 
                    },
                    {
                        path:'*',
                        element:<React.Suspense fallback={<Loading/>}><BlogPage404/></React.Suspense>
                    }
                ]
            },
            {
                path:'profile',
                element: <React.Suspense fallback={<Loading/>}><Profile/></React.Suspense> ,
                auth: true
            }
        ],
    },
    {
        path: '/auth',
        element:<React.Suspense fallback={<Loading/>}><AuthLayout/></React.Suspense>,
        children: [
            {
                path:'login',
                element:  <React.Suspense fallback={<Loading/>}><Login/></React.Suspense>   
            },
            {
                path:'register',
                element: <React.Suspense fallback={<Loading/>}><Register/></React.Suspense>  
            }
        ]
    },
    {
        path:'*',
        element:<React.Suspense fallback={<Loading/>}><Page404/></React.Suspense>  
    }
]

const authMap = routes => routes.map(route => {
    if (route.auth){
        route.element = <React.Suspense fallback={<Loading/>}><PrivateRoute>{route.element}</PrivateRoute></React.Suspense>  
    }
    if(route.children){
        route.children = authMap(route.children)
    }
    return route;
})

export default authMap(routes);