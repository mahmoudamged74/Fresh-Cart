import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../images/freshcart-logo.svg"
import { useContext } from 'react';
import { Auth } from '../../context/Authcontect';
import { cart } from '../../context/Cartcontext';

export default function Navbar() {

const {productsCart} = useContext(cart)
console.log(productsCart);
let navigate=useNavigate()

let {userIsLogged, setuserIsLogged}=useContext(Auth)

function logout() {
setuserIsLogged(false)
  localStorage.removeItem('token')
  navigate('/login')
  
}



  return (
    <>
    <nav className="navbar navbar-expand-lg bg-main-light ">
  <div className="container">
    <Link className="navbar-brand" to="#">
      <img src={logo} alt="logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      {userIsLogged?
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 text-center">
        
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="products">Products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="categories">Categories</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="allorders">Orders</Link>
        </li>

        </ul>:''}



        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">
    
       {userIsLogged?
       <>
       <div className='d-flex align-items-center flex-column flex-lg-row my-2 my-md-0'>
       <Link to="cart" type="button" className="btn me-lg-4 position-relative">
       <i className="fa-brands fa-shopify fa-2x text-main"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main">
     { productsCart?.numOfCartItems||0}
        <span className="visually-hidden">unread messages</span>
       </span>
      </Link>

      <li className="nav-item cursor-pointer mt-2 mt-md-0">
          <span onClick={logout} >logout</span>
        </li>
       </div>


       
</>:<>
        <li className="nav-item">
          <Link className="nav-link" to="register">Register</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link" to="login">Login</Link>
        </li>
        
        </>
}
        </ul>
      

      
    </div>
  </div>
</nav>
    </>
  )
}
