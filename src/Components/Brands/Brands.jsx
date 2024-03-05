import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utils/baseUrl'
import { Helmet } from 'react-helmet';

export default function Brands() {

  const [brands, setbrands] = useState([])
  const [isloading, setisloading] = useState(true)

   async function getAllBrands(){
    let {data} = await axios.get(`${baseUrl}/brands`)
    console.log(data.data)
    setbrands(data.data)
    setisloading(false)
   }
   useEffect(() => {
    getAllBrands()
   }, [])

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    {isloading?<div className='vh-100 d-flex justify-content-center align-items-center'>
  <span class="loader"></span>
</div>
   
   :
    <div className='row g-1 py-5'>
  {brands.map((brand , index)=>{
    return <div className='col-lg-3 col-md-4 col-sm-6 box-hover rounded-2' key={index} >
      <img src={brand.image}  alt="" />

    </div>
  })} 
  </div>}
    </>
  )
}
