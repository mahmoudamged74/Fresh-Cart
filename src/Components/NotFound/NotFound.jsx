import React from 'react'
import found from '../../images/error.svg'
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
   <div className='py-5'>

   <img src={found} alt="steve jobs" className='w-100' />

   </div>

    
    </>
  )
}

export default NotFound