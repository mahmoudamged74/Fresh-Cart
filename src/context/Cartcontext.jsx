import axios from "axios";
import { createContext,  useState } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../Utils/baseUrl";

export const cart=createContext()


export default function CartProvider({children}) {


  const [productsCart, setproductsCart] = useState({})
  const [isloading, setisloading] = useState(false)
  
async function getAllProductCart() {
    try {
      let {data} = await axios.get(`${baseUrl}/cart`,{
        headers:{
          token:localStorage.getItem('token')
        }
      })
      console.log(data)
      setproductsCart(data)
      setisloading(false)
    
    } catch (error) {
      console.log(error);
    }
    }
  
 




async function addToCart(id) {
        const {data}=await axios.post(`${baseUrl}/cart`,{
           productId: id
        },{
         headers:{
           token:localStorage.getItem('token')
         }
        }) 
       if (data.status === 'success') {
         toast.success(data.message)
       }
        setproductsCart(data)
   }
       
    return <cart.Provider value={{addToCart,productsCart, setproductsCart,isloading, setisloading,getAllProductCart}}>
        {children}
    </cart.Provider>
    
}
