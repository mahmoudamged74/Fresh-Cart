import React, { useState } from 'react'

const CartProduct = ({productCart,remove,updateProduct}) => {
console.log(productCart)
const [count, setcount] = useState(productCart?.count)
return (
<>
<div  className='my-3 rounded-2 shadow p-2'>

<div className='row g-0 align-items-center '>
    <div className='col-md-2 '>
          <img  alt='stevejobs' src={productCart.product?.imageCover}  className=' w-100 '/>
    </div>

    <div className='col-md-8 p-2 p-md-4'>
     <h2>{productCart?.product?.title}</h2>
     <h5>{productCart?.product?.category?.name}</h5>
     <p>{productCart?.price} EGP </p>
     <p><i className='fas fa-star rating-color me-1'></i>{productCart?.product?.ratingsAverage}</p>
     <p><span className='fw-bolder'>Total Price:</span> {productCart?.price * productCart?.count} EGP </p>
   </div>
   <div className='col-md-2  d-flex flex-md-column align-items-center justify-content-between'>
  <button className='btn text-danger mb-3'onClick={()=>{remove(productCart.product._id)}} >remove</button>

  <div className='d-flex align-items-center'>
    <button disabled={count===1} className='btn bg-main text-white mx-2' onClick={()=>{updateProduct(productCart.product._id,count -1); setcount(count -1)}} >
      -
    </button>
    <span>{count}</span>
    <button className='btn bg-main text-white mx-2' onClick={()=>{updateProduct(productCart.product._id,count +1); setcount(count +1)}} >
      +
    </button>
  </div>
  
</div>
   </div>

</div>



</>  )
}

export default CartProduct