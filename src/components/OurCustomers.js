import React from 'react';
import { listArrowQuote } from "../data/arrowAndQuote";
import PropTypes from 'prop-types';
const OurCustomers = ({ click, text, image, bigerHeading, smallerHeading, index }) => {


  return (
    <section id="customers" className="ourCustomers">
      <h1 className="everyMiddleHeading">Our customers</h1>
      <h4 className="everySmallestHeading">Testimonials</h4>
      <img className="ourCustomers__quote" src={listArrowQuote[0].img13} alt="quote" />
      <div className="ourCustomers__mainPart">
        <img
          onClick={() => click('left')}
          className="ourCustomers__mainPart-arrowLeft"
          src={listArrowQuote[0].img11}
          loading="lazy"
          alt="arrowLeft"
        />

        <figure className="ourCustomers__figure">
          <p className="ourCustomers__figure-text">{text}</p>
          <div className="ourCustomers__figure-containerForWoman">
            <div className="onlyPicture">
              <img
                className="ourCustomers__figure-woman"
                src={image}
                loading="lazy"
                alt="woman"
              />
            </div>
            <figcaption className="ourCustomers__figure-dataWomen">
              <h1 className="ourCustomers__figure-bigerHeading">
                {bigerHeading}
              </h1>
              <h3 className="ourCustomers__figure-smallerHeading">
                {smallerHeading}
              </h3>
            </figcaption>
          </div>
          <div className="dots">
            <span
              className={
                index === 0 ? "dots__span active" : "dots__span"
              }
            ></span>
            <span
              className={
                index === 1 ? "dots__span active" : "dots__span"
              }
            ></span>
            <span
              className={
                index === 2 ? "dots__span active" : "dots__span"
              }
            ></span>
          </div>
        </figure>

        <img
          onClick={() => click('right')}
          className="ourCustomers__mainPart-arrowRight"
          src={listArrowQuote[0].img12}
          loading="lazy"
          alt="arrowRight"
          type="right"
        />
      </div>
    </section>
  );

}
OurCustomers.propTypes = {
  click: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  bigerHeading:  PropTypes.string.isRequired,
  smallerHeading: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
export default OurCustomers;