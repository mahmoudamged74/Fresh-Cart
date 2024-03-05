import React from 'react'
import { useFormik } from 'formik';
import  axios  from 'axios';
import { baseUrl } from './../../Utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";



const CodeEmail = () => {
    let navigate = useNavigate()
    
    let forgetFormik =   useFormik({
        initialValues:{
            resetCode:"",
        },
       
        onSubmit: (values)=>{
            
          axios.post(`${baseUrl}/auth/verifyResetCode`,{
            resetCode:`${values.resetCode}`
          }).then((data)=>{
            console.log(data)
            if(data.data.status === "Success"){
                navigate("/resetpassword")
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
                <title>Code Email</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    <div className='form m-auto my-5'>
        
        <form onSubmit={forgetFormik.handleSubmit} >

            <label htmlFor="resetCode">resetCode</label>
            <input onBlur={forgetFormik.handleBlur}  value={forgetFormik.values.email} onChange={forgetFormik.handleChange} type="text" className='form-control my-2'id='resetCode' name='resetCode' />

            <button disabled={!(forgetFormik.isValid && forgetFormik.dirty) } type='submit' className='btn bg-main text-white' >
                    submit
            </button>

        </form>
    </div>
    </>
)
}

export default CodeEmail