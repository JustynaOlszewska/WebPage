import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../styles/sass/_header.scss";

function SimpleSlider(props) {
    

   const settings = {
    draggable: false,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
         
      <div className="slide1">
        <h1>Let’s turn your idea into digital product</h1>
        <a href="http://www.wp.pl" className="allButtons">
     Know more
     </a>
      </div>
      <div className="slide2" >
        <h1>We create digital products for companies and startups</h1>
        <a href="http://www.wp.pl" className="allButtons">
   Know more
      </a>
      </div>
 
      </Slider>
    );
  }

export default SimpleSlider;