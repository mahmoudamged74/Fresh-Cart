import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utils/baseUrl'
import { Helmet } from 'react-helmet';

export default function Categories() {
  let [allCategories ,setallCategories]   = useState(true)
  let [detailsCat ,setdetailsCat]   = useState([])
  let [ isloading ,setisloading]   = useState([])

  async function getAllCategories(){
      let {data} = await axios.get(`${baseUrl}/categories`)
      console.log(data.data)
      setallCategories(data.data)
      setisloading(false)

  }


async function getDetailesGategories(id) {
  let {data} = await axios.get(`${baseUrl}/categories/${id}/subcategories`)
      console.log(data.data)
      setdetailsCat(data.data)
    }

  useEffect(()=>{
    getAllCategories()
  },[])
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Categories</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
 {isloading?<div className='vh-100 d-flex justify-content-center align-items-center'>
  <span class="loader"></span>
</div>
   

:
<>
  <div className='row g-3 mt-3'>
    {allCategories.map((category , index)=> <div className='col-md-4 col-sm-6 rounded-2' key={index} onClick={()=>getDetailesGategories(category._id)}>
      <div className='box-hover cursor-pointer '>
          <img className='w-100 rounded-2' height={250} src={category.image} alt="" />
          <h4 className='text-muted text-center py-3'>{category.name}</h4>
      </div>
    </div>)}
    </div>


<div className='row g-2 mt-5'>
  {detailsCat.map((x ,index)=><div key={index} className='col-md-4'>
    <div className='box-hover cursor-pointer text-center p-2 rounded-2 '>
      <h3 className='m-0'>{x.name}</h3>

    </div>
  

  </div>
    )}

</div>

</>}





    </>
  )
}
