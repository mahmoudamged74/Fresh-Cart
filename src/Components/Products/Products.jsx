import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utils/baseUrl'
import Product from './../Product/Product';
import {Helmet} from "react-helmet";


export default function Products() {
const [isloading, setisloading] = useState(false)
  const [Products ,setProducts] = useState([])
  async function getAllProducts(){
    setisloading(true)
     let {data} = await axios.get(`${baseUrl}/products`)
     setProducts(data.data)
    setisloading(false)
   }
   useEffect(() =>{
     getAllProducts()
   },[])
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Products Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   {isloading?<div className='vh-100 d-flex justify-content-center align-items-center'>
  <span class="loader"></span>
</div>
   
   :
      <div className='row g-2 mt-3'>
      <Product Products={Products}/>
      </div>}
  
    </>
  )
}
