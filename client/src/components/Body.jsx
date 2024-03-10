import React, { useEffect } from 'react'
import Register from './Register'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Browse from './Browse'
import ErrorComponent from './ErrorComponent'


const Body = () => {
  

  const appRoute = createBrowserRouter([
    {
      path : "/",
      element : <Register/>,
    },
    {
      path : "/browse",
      element : <Browse />
    }
  ])

  

  return (
    <RouterProvider router={appRoute} />
  )
}

export default Body