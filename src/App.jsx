import React from 'react'
import { RouterProvider,  createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Components/Pages/HomePage'
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import ProductDetiles from './Components/ProductDetiles/ProductDetiles';
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import { ToastContainer } from 'react-toastify';
import Cart from './Components/Cart/Cart'
import ProductRoute from './Components/ProductRoute/ProductRoute';
import AuthRoute from './Components/AuthRoute/AuthRoute';
import AuthcontextProvider from './context/Authcontect';
import CartProvider from './context/Cartcontext';
import NotFound from './Components/NotFound/NotFound';
import Address from './Components/Address/Address';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import CodeEmail from './Components/CodeEmail/CodeEmail';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import AllOrders from './Components/AllOrders/AllOrders';


export default function App() {
  let routers = createHashRouter([
    {path:'/',element:<Layout/>,children:[
      {index:true ,element:<HomePage/>},

      {path:"register" ,element: <AuthRoute><Register/></AuthRoute>},
      {path:"login" ,element:<AuthRoute><Login/></AuthRoute> },
      {path:"forgetpassword" ,element:<AuthRoute><ForgetPassword/></AuthRoute> },
      {path:"codeemail" ,element:<AuthRoute><CodeEmail/></AuthRoute> },
      {path:"resetpassword" ,element:<AuthRoute><ResetPassword/></AuthRoute> },



      {path:"products" ,element:<ProductRoute><Products/></ProductRoute>},
      {path:"allorders" ,element:<ProductRoute><AllOrders/></ProductRoute>},
      {path:"cart" ,element:<ProductRoute><Cart/></ProductRoute>},
      {path:"categories" ,element:<ProductRoute><Categories/></ProductRoute>},
      {path:"brands" ,element:<ProductRoute><Brands/></ProductRoute> },
      {path:"productDetiles/:id" ,element:<ProductRoute><ProductDetiles/></ProductRoute>},
      {path:"address/:idcart" ,element:<ProductRoute><Address/></ProductRoute>},


      {path:"*" ,element:<NotFound/>},




    ]}
  ])


  return <>
  <ToastContainer theme='colored'/>
  
<AuthcontextProvider>
       <CartProvider>
    <RouterProvider router={routers}/>
  </CartProvider>    

</AuthcontextProvider>
 
  </>
  
  


}
