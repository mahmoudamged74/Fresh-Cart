import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Utils/baseUrl'
import Slider from "react-slick";


export default function CategorySlider() {
 const [categories ,setCategories] = useState([])
 async function getAllCategories(){
    let {data} = await axios.get(`${baseUrl}/categories`)
    setCategories(data.data)
  }
  useEffect(() =>{
    getAllCategories()
  },[])

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows:false,
    autoplay:true,
  };
  return (
    <>
    <div className="my-5 container">
      <h3>Shop popular Categories</h3>
  <Slider {...settings} autoplaySpeed={3000}>

      {categories.map((item , index) => { 
        return <div key={index}>
          <img src={item.image} alt="" className='w-100' height={200} />
          <h6>{item.name}</h6>
        </div>
      })}
    </Slider>
  </div>
  
    </>
  )
}
