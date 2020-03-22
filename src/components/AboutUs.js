import React from 'react';
import img10 from "../img/man-537136_640.webp";

import {name} from "../data/pesonList"
const AboutUs = () => {
  const nameImgList = name.map(person=> {
    return (
      <figure className="aboutUs__container aboutUs__container-image">
    <img className="aboutUs__image" src={img10} loading="lazy" alt="man" />
    <div className="circle">
      <span className="circle__tooltiptext">Project manager</span>
    </div>
    <figcaption>
      <h4 className="aboutUs__heading">{person.name}</h4>
    </figcaption>
  </figure>
    )
    
  })
    return (  
        <section id="aboutUs" className="aboutUs">
        <h3 className="everyMiddleHeading">About us</h3>
        <h6 className="everySmallestHeading">Meet the team</h6>
        <div className="aboutUs__allFigure">
        {nameImgList}
        </div>
      </section>
    
     );
}
 
export default AboutUs;