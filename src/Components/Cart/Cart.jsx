import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utils/baseUrl'
import CartProduct from '../CartProduct/CartProduct'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { cart } from '../../context/Cartcontext'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';


export default function Cart() {
const [TimeoutId, setTimeoutId] = useState()


const {productsCart, setproductsCart,isloading, setisloading,getAllProductCart} = useContext(cart)
useEffect(() => {
  
getAllProductCart()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


function removeProduct(id) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then(async(result) => {
    
    if (result.isConfirmed) {
      setisloading(true)
  const {data}=await axios.delete(`${baseUrl}/cart/${id}`,{
    headers:{
      token:localStorage.getItem('token')
    }
  })
  setproductsCart(data) 
   console.log(data)
   setisloading(false)
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success"
      });
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });

}

function clearCart() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then(async(result) => {
    if (result.isConfirmed) {
      setisloading(true)
      try {
        const {data}=await axios.delete(`${baseUrl}/cart`,{
          headers:{
            token:localStorage.getItem('token')
          }
        })
        setproductsCart(data) 
         console.log(data)
         setisloading(false)
        
      } catch (error) {
        console.log(error)
        
      }
      
  
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success"
      });
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });

}
function updateProduct(id ,count) {

clearTimeout(TimeoutId)

let x=setTimeout(async ()=>{
const {data}=await axios.put(`${baseUrl}/cart/${id}`,{
    count
 },{
    headers:{
      token:localStorage.getItem('token')
    }
  })
  setproductsCart(data) 
   console.log(data)
},3000)

setTimeoutId(x)

}

return (
<> 
<Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

{isloading?<div className='vh-100 d-flex justify-content-center align-items-center'>
  <span class="loader"></span>
</div>
:
<>
{productsCart?.data?.products.length > 0 ?<>

<button className='btn btn-danger ms-auto d-block mt-3' onClick={clearCart}>ClearCart</button>

{productsCart?.data?.products?.map((prod,index)=><CartProduct key={index} productCart={prod} remove={removeProduct} updateProduct={updateProduct} />)}

<div className='d-flex justify-content-between align-items-center'>
<Link to={`/address/${productsCart.data._id}`}>

<button className='btn bg-main text-white'>Check Out</button>
</Link>
  <p className='lead' >totalCartPrice : {productsCart?.data?.totalCartPrice} EGP</p>

</div>
</>
:<div className='bg-warning-subtle p-3 mt-2 '>
 <h4 className='text-center m-0'>No Product Cart</h4>
</div>}
</>

}
</>  

)
}
