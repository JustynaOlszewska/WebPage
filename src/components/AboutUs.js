import React from 'react';
import img10 from "../img/man-537136_640.jpg";

const AboutUs = (props) => {
    return (  
        <section id="aboutUs" className="aboutUs">
        <h3 className="everyMiddleHeading">About us</h3>
        <h6 className="everySmallestHeading">Meet the team</h6>
        <div className="aboutUs__allFigure">
          <figure className="aboutUs__container aboutUs__container-image">
            <img className="aboutUs__image" src={img10} alt="man" />
            <div className="circle">
              <span className="circle__tooltiptext">Project manager</span>
            </div>
            <figcaption>
              <h4 className="aboutUs__heading">Thomas</h4>
            </figcaption>
          </figure>
          <figure className="aboutUs__container aboutUs__container-image">
            <img className="aboutUs__image" src={img10} alt="man" />
            <div className="circle">
              <span className="circle__tooltiptext">Project manager</span>
            </div>
            <figcaption>
              <h4 className="aboutUs__heading">Adam</h4>
            </figcaption>
          </figure>
          <figure className="aboutUs__container aboutUs__container-image">
            <img className="aboutUs__image" src={img10} alt="man" />
            <div className="circle">
              <span className="circle__tooltiptext">Project manager</span>
            </div>
            <figcaption>
              <h4 className="aboutUs__heading">David</h4>
            </figcaption>
          </figure>
          <figure className="aboutUs__container firstSecondPart__container-image">
            <img className="aboutUs__image" src={img10} alt="man" />
            <div className="circle">
              <span className="circle__tooltiptext">Project manager</span>
            </div>
            <figcaption>
              <h4 className="aboutUs__heading">Phil</h4>
            </figcaption>
          </figure>
        </div>
      </section>
    
     );
}
 
export default AboutUs;