/* eslint-disable jsx-a11y/alt-text */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utils/baseUrl'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { cart } from '../../context/Cartcontext'
import { Carousel } from 'react-responsive-carousel';
import { Helmet } from 'react-helmet';

export default function ProductDetiles() {
  const {addToCart}=useContext(cart)


 let {id} = useParams()
  const [Product ,setProduct] = useState([]);
  const [isloading ,setisloading] = useState(true);

  async function getProduct(){
     let {data} = await axios.get(`${baseUrl}/products/${id}`)
     setProduct(data.data)
     console.log(data.data);
     setisloading(false)
  
   }

  useEffect(() =>{
    getProduct() 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) ;


  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Product Detiles</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     {isloading?<div className='vh-100 d-flex justify-content-center align-items-center'>
  <span class="loader"></span>
</div>
:<div className="container">
      <div className='row justify-content-center align-items-center mt-5'>

        <div className="col-md-3">
        <Carousel transitionTime={500} infiniteLoop autoPlay >
               {Product?.images?.map((image)=><div>
                <img  src={image}/>
               </div>
               
               )}
            </Carousel>
        </div>

        <div className="col-md-9">
        <p className='fw-bolder'>{Product.title}</p>
        <h6>{Product.description}</h6>      
        <div className='d-flex justify-content-between align-items-center my-3'>
          <span>{Product.price} EGP</span>
          <div>
            <i className='fas fa-star rating-color'></i>
            {Product.ratingsAverage}
          </div>
        </div>
      
          <button className='btn bg-main text-white w-100 mb-3' onClick={()=>addToCart(Product._id)}>Add to cart</button>
       </div>

        </div>

      </div>}
   
    </>
  )
}
