import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cart } from '../../context/Cartcontext';


export default function Product({Products}) {



const {addToCart}=useContext(cart)

  return (
    <>

    {Products.map((item , index)=>{
      return <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
       <div className='product '>
      <Link to={"/productDetiles/"+item._id}>
      <img src={item.imageCover} className='w-100' alt="" />
        <h6 className='text-main'>{item.category.name}</h6>
        <h6 className='h6'>{item.brand.name}</h6>
        <p className='fw-bolder'>{item.title.split(" ").slice(0,2).join(" ")}</p>
        <div className='d-flex justify-content-between align-items-center my-3'>
          <span>{item.price} EGP</span>
          <div>
            <i className='fas fa-star rating-color'></i>
            {item.ratingsAverage}
          </div>
        </div>
      </Link>
          <button className='btn bg-main text-white w-100 mb-3' onClick={()=>addToCart(item._id)}>Add to cart</button>
       </div>
      </div>
    })}
    </>
  )
}
