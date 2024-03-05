import React from 'react'
import Slider from "react-slick";
import slider1 from "../../images/slider-image-1.jpeg"
import slider2 from "../../images/slider-2.jpeg"
import slider3 from "../../images/slider-image-2.jpeg"
import slider4 from "../../images/slider-image-3.jpeg"



export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <>
  <div className="my-2 container">
  <Slider {...settings} >
      <img className='w-100' height={400}  src={slider1} alt="" />
      <img className='w-100' height={400}  src={slider2} alt="" />
      <img className='w-100' height={400}  src={slider3} alt="" />
      <img className='w-100' height={400}  src={slider4} alt="" />
    </Slider>
  </div>
  
    </>
  )
}
