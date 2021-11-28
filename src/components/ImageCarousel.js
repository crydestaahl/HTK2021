import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
  const settings = {   
    infinite: true,
    dots: false,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000
  };
  return (
    <div>
    <Slider {...settings}>
        {images.map((item) => (
        <div key={item.id}>
            <img src={item.src}  alt={item.alt} />
        </div>
        ))}
    </Slider>
    </div>
  );
}