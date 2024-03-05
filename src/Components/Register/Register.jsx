import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { baseUrl } from './../../Utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Helmet} from "react-helmet";

export default function Register() {
    const notify = (msg , type) => {
        toast[type](msg)
    };
 let [isLoading ,setisLoading]=useState(false)

    let navigate = useNavigate()


    let validate=(values)=>{

        let errors={}
        if(!values.name){
            errors.name="name is required"
        }else if (values.name.length >15){
            errors.name= 'Must be 15 characters or less';
        }else if (values.name.length <3){
            errors.name= 'too short name';
        }

        if (!values.email) {
            errors.email = 'email is Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'password is Required';
          } else if (!/^[A-Z][a-z0-9A-z@%$&]{7,}$/i.test(values.password)) {
            errors.password = 'Invalid password must satrt capital letter and It consists of 8 letters';
          }

          if (!values.rePassword) {
            errors.rePassword = 'rePassword is Required';
          } else if (values.rePassword !==values.password) {
            errors.rePassword = 'password and rePassword not match';
          }

          if (!values.phone) {
            errors.phone = 'phone is Required';
          } else if (!/^01[0-2,5]{1}[0-9]{8}$/i.test(values.phone)) {
            errors.phone = 'Enter Egyptian number';
          }

          return errors;
          
    }



 let registerFormik =   useFormik({
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
          axios.post(`${baseUrl}/auth/signup` ,values).then((data)=>{
                if(data.data.message ==="success"){
                    notify("success","success")
                    setisLoading(false)
                    navigate('/login')
                }
            }).catch((error)=>{
                
                if(error.response.data.message=== "Account Already Exists"){
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
                <title>Register Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className='form m-auto my-5'>
        <h2>Register Now</h2>
        <form onSubmit={registerFormik.handleSubmit} >
            <label htmlFor="name">Name</label>
            <input onBlur={registerFormik.handleBlur} value={registerFormik.values.name} onChange={registerFormik.handleChange} type="text" className='form-control my-2'id='name' name='name' />
            {registerFormik.errors.name && registerFormik.touched.name? <div className='alert alert-danger'>
                {registerFormik.errors.name}
            </div>:""}
            
            <label htmlFor="email">Email</label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.email} onChange={registerFormik.handleChange} type="email" className='form-control my-2'id='email' name='email' />
            {registerFormik.errors.email && registerFormik.touched.email? <div className='alert alert-danger'>
                {registerFormik.errors.email}
            </div>:""}

            <label htmlFor="password">Password</label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.password} onChange={registerFormik.handleChange} type="password" className='form-control my-2'id='password' name='password' />
            {registerFormik.errors.password && registerFormik.touched.password? <div className='alert alert-danger'>
                {registerFormik.errors.password}
            </div>:""}

            <label htmlFor="rePassword">Repassword</label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.rePassword} onChange={registerFormik.handleChange} type="password" className='form-control my-2'id='rePassword' name='rePassword' />
            {registerFormik.errors.rePassword && registerFormik.touched.password? <div className='alert alert-danger'>
                {registerFormik.errors.rePassword}
            </div>:""}

            <label htmlFor="phone">Phone</label>
            <input onBlur={registerFormik.handleBlur}  value={registerFormik.values.phone} onChange={registerFormik.handleChange} type="tel" className='form-control my-2'id='phone' name='phone' />
            {registerFormik.errors.phone && registerFormik.touched.phone? <div className='alert alert-danger'>
                {registerFormik.errors.phone}
            </div>:""}
            <button disabled={!(registerFormik.isValid && registerFormik.dirty) && !isLoading } type='submit' className='btn bg-main text-white' >
                {!isLoading?"Register":<i class="fa-solid fa-spinner fa-spin"></i> }
            </button>
        </form>
    </div>
    </>
)
}
