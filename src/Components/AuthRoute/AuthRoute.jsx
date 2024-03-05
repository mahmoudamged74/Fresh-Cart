import React, { useContext } from 'react'
import { Auth } from './../../context/Authcontect';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {

    let {userIsLogged}=useContext(Auth)

  return  (
    <>
  { !userIsLogged ? children : <Navigate to={'/'}/>}  
    </>
  )
  }
export default AuthRoute