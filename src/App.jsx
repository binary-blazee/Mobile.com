
import './App.css'
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Buy from './Pages/Buy'

const user=localStorage.getItem('status')==='Access Granted'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
      path:'',
      element:<Home/>
    },
    {
       path:'shop',
       element:<Shop/>
    },
    {
      path:'blog',
      element:<Blog/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'cart',
      element:user ? <Cart/> : <Navigate to='/' replace/>,
      children:[
        {
          path:'buy',
          element:<Buy/>
        }
      ]
    }
  ]
  }
])

function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
