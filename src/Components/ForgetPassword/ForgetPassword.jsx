import React from 'react'
import { useFormik } from 'formik';
import  axios  from 'axios';
import { baseUrl } from './../../Utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";


const ForgetPassword = () => {
    let navigate = useNavigate()
    

    let validate=(values)=>{

        let errors={}
      
        if (!values.email) {
            errors.email = 'email is Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
          
    }

    let forgetFormik =   useFormik({
        initialValues:{
            email:"",
        },
        validate
        ,
        onSubmit: (values)=>{
            
          axios.post(`${baseUrl}/auth/forgotPasswords`,values).then((data)=>{
            console.log(data)
            if(data.data.statusMsg === "success"){
                navigate("/codeemail")
            }
               
            }).catch((error)=>{
                console.log(error);
            })
        }
    })
    
return (

    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Forget Password</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className='form m-auto my-5'>
        
        <form onSubmit={forgetFormik.handleSubmit} >

            <label htmlFor="email">Email</label>
            <input onBlur={forgetFormik.handleBlur}  value={forgetFormik.values.email} onChange={forgetFormik.handleChange} type="email" className='form-control my-2'id='email' name='email' />
            {forgetFormik.errors.email && forgetFormik.touched.email? <div className='alert alert-danger'>
                {forgetFormik.errors.email}
            </div>:""}

            <button disabled={!(forgetFormik.isValid && forgetFormik.dirty) } type='submit' className='btn bg-main text-white' >
                    submit
            </button>

        </form>
    </div>
    </>
)
}

export default ForgetPassword