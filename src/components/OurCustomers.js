import React from 'react';
import img13 from "../img/icons8-quote-left-64.png";
import img12 from "../img/icons8-chevron-right-30.png";
import img11 from "../img/icons8-chevron-left-30.png";
const OurCustomers = (props) => {
    return ( 
<section id="customers" className="ourCustomers">
        <h3 className="everyMiddleHeading">Our customers</h3>
        <h6 className="everySmallestHeading">Testimonials</h6>
        <img className="ourCustomers__quote" src={img13} alt="quote" />
        <div className="ourCustomers__mainPart">
          <img
            onClick={()=>props.click('left')}
            className="ourCustomers__mainPart-arrowLeft"
            src={img11}
            alt="arrowLeft"
          />

                <figure className="ourCustomers__figure">
                  <p className="ourCustomers__figure-text">{props.text}</p>
                  <div className="ourCustomers__figure-containerForWoman">
                    <div className="onlyPicture">
                      <img
                        className="ourCustomers__figure-woman"
                        src={props.image}
                        alt="woman"
                      />
                    </div>
                    <figcaption className="ourCustomers__figure-dataWomen">
                      <h4 className="ourCustomers__figure-bigerHeading">
                        {props.bigerHeading}
                      </h4>
                      <h6 className="ourCustomers__figure-smallerHeading">
                        {props.smallerHeading}
                      </h6>
                    </figcaption>
                  </div>
                  <div className="dots">
                    <span
                      className={
                       props.index === 0 ? "dots__span active" : "dots__span"
                      }
                    ></span>
                    <span
                      className={
                        props.index === 1 ? "dots__span active" : "dots__span"
                      }
                    ></span>
                    <span
                      className={
                    props.index === 2 ? "dots__span active" : "dots__span"
                      }
                    ></span>
                  </div>
                </figure>
                <img
                  onClick={()=>props.click('right')}
                  className="ourCustomers__mainPart-arrowRight"
                  src={img12}
                  alt="arrowRight"
                  type="right"
                />
              </div>
            </section>
     );
}
 
export default OurCustomers;