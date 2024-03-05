import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { baseUrl } from './../../Utils/baseUrl';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Auth } from './../../context/Authcontect';
import {Helmet} from "react-helmet";


export default function Login() {
   let { setuserIsLogged}=useContext(Auth)



    const notify = (msg , type) => {
        toast[type](msg)
    };
 let [isLoading ,setisLoading]=useState(false)

    let navigate = useNavigate()


    let validate=(values)=>{

        let errors={}
      
        if (!values.email) {
            errors.email = 'email is Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'password is Required';
          } else if (!/^[A-Z][a-z0-9A-z@%$&]{7,}$/i.test(values.password)) {
            errors.password = 'Invalid password ';
          }
          return errors;
          
    }



 let loginFormik =   useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            rePassword:"",
            phone:"",
        },
        validate
        ,
        onSubmit: (values)=>{
            setisLoading(true)
          axios.post(`${baseUrl}/auth/signin` ,values).then((data)=>{
                if(data.data.message ==="success"){
                  console.log(data);
                  localStorage.setItem("token",data.data.token)
                    notify("success","success")
                    setisLoading(false)
                    navigate('/')               
                   setuserIsLogged(true)

                }
            }).catch((error)=>{
                if(error.response.data.message=== "Incorrect email or password"){
                    setisLoading(false)
                    notify(error.response.data.message,"error")
                }

            })
        }
    })
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className='form m-auto my-5'>
        <h2>Login Now</h2>
        <form onSubmit={loginFormik.handleSubmit} >

            <label htmlFor="email">Email</label>
            <input onBlur={loginFormik.handleBlur}  value={loginFormik.values.email} onChange={loginFormik.handleChange} type="email" className='form-control my-2'id='email' name='email' />
            {loginFormik.errors.email && loginFormik.touched.email? <div className='alert alert-danger'>
                {loginFormik.errors.email}
            </div>:""}

            <label htmlFor="password">Password</label>
            <input onBlur={loginFormik.handleBlur}  value={loginFormik.values.password} onChange={loginFormik.handleChange} type="password" className='form-control my-2'id='password' name='password' />
            {loginFormik.errors.password && loginFormik.touched.password? <div className='alert alert-danger'>
                {loginFormik.errors.password}
            </div>:""}

            <div className='d-flex justify-content-between align-items-center'>
                
            <button disabled={!(loginFormik.isValid && loginFormik.dirty) && !isLoading } type='submit' className='btn bg-main text-white' >
                {!isLoading?"Login":<i className="fa-solid fa-spinner fa-spin"></i> }
            </button>
            <Link to={'/forgetpassword'}>
            <button className='btn btn-outline-secondary'>Forget Password?</button>
            </Link>




            </div>

        </form>
    </div>
    </>
)
}
