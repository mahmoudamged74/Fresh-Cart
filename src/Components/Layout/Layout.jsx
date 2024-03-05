import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function Layout() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <Navbar/>
    <div className="container">
    <Outlet></Outlet>
    </div>
    <Footer/>
    </>
  )
}
