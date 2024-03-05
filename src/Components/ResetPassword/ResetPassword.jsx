import React from 'react'
import { useNavigate } from 'react-router-dom'
import  axios  from 'axios';
import { baseUrl } from './../../Utils/baseUrl';
import { useFormik } from 'formik';
import {Helmet} from "react-helmet";


const ResetPassword = () => {
    
    let navigate = useNavigate()
    
    let resetpassword =   useFormik({
        initialValues:{
            email:"",
            newPassword:''
        },
       
        onSubmit: (values)=>{
            
          axios.put(`${baseUrl}/auth/resetPassword`,values).then((data)=>{
            console.log(data)
            if(data.data.token){
                navigate("/login")
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
                <title>Reset Password</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className='form m-auto my-5'>
       
        <form onSubmit={resetpassword.handleSubmit} >

            <label htmlFor="email">Email</label>
            <input onBlur={resetpassword.handleBlur}  value={resetpassword.values.email} onChange={resetpassword.handleChange} type="email" className='form-control my-2'id='email' name='email' />
            {resetpassword.errors.email && resetpassword.touched.email? <div className='alert alert-danger'>
                {resetpassword.errors.email}
            </div>:""}

            <label htmlFor="newPassword">newPassword</label>
            <input onBlur={resetpassword.handleBlur}  value={resetpassword.values.password} onChange={resetpassword.handleChange} type="password" className='form-control my-2'id='newPassword' name='newPassword' />
            {resetpassword.errors.newPassword && resetpassword.touched.newPassword? <div className='alert alert-danger'>
                {resetpassword.errors.newPassword}
            </div>:""}
    
            <button disabled={!(resetpassword.isValid && resetpassword.dirty) } type='submit' className='btn bg-main text-white' >
                    submit
            </button>

        </form>
    </div>
    </>
)
}

export default ResetPassword