import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      //element: ,
    },
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App