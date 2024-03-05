import React, { useContext } from 'react'
import { Auth } from './../../context/Authcontect';
import { Navigate } from 'react-router-dom';

const ProductRoute = ({children}) => {

let {userIsLogged}=useContext(Auth)

return  (<>
{userIsLogged ? children : <Navigate to={'/login'}/>}

</>)
}
export default ProductRoute