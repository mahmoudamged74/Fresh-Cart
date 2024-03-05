import React from 'react'

export default function Footer() {
  return (
    <>
        <div className='bg-light p-5 mt-3'>
          <h5 className='fw-bolder'>Get the FreshCart app</h5>
          <p className='text-muted my-2'>We Will Send You a link, open it on your phone to donwload the app.</p>
         <div className='row g-3'>
          <div className="col-lg-10">
            <input type="text" className='form-control' placeholder='Email ...' />
          </div>
          <div className="col-lg-2">
            <button className='bg-main btn text-white'>Share App Link</button>
          </div>

         </div>

        </div>

    
    </>
  )
}
