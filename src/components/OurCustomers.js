import React, { Component } from 'react';
import { listArrowQuote } from "../data/arrowAndQuote";
import { slider } from "../data/slider"


class OurCustomers extends Component {
  state = { 
    slider: [...slider],

    text: slider[0].text,
    image: slider[0].img,
    bigerHeading: slider[0].bigerHeading,
    smallerHeading: slider[0].smallerHeading,
   };
   index = 0;

   componentDidMount() {
     this.arrowInterval = setInterval(this.changeSlideArrow, 3000);
   }
   getData() {
     this.setState({
       slider: [...slider]
     });
   }
   changeSlideArrow = () => {
     this.index++;
     if (this.index < slider.length) {
       this.setState({
 
         image: slider[this.index].img,
         text: slider[this.index].text,
         bigerHeading: slider[this.index].bigerHeading,
         smallerHeading: slider[this.index].smallerHeading
       });
     } else if (this.index >= slider.length - 1) {
       this.index = 0;
       this.setState({
         image: slider[this.index].img,
         text: slider[this.index].text,
         bigerHeading: slider[this.index].bigerHeading,
         smallerHeading: slider[this.index].smallerHeading
       });
     }
 
   };
   changeSlideClick = type => {
     clearInterval(this.arrowInterval);
     if (type === "left") {
       this.index--;
       if (this.index >= 0) {
         this.setState({
           text: slider[this.index].text,
           image: slider[this.index].img,
           bigerHeading: slider[this.index].bigerHeading,
           smallerHeading: slider[this.index].smallerHeading
         });
       } else if (this.index < 0) {
         this.index = slider.length - 1;
         this.setState({
           text: slider[this.index].text,
           image: slider[this.index].img,
           bigerHeading: slider[this.index].bigerHeading,
           smallerHeading: slider[this.index].smallerHeading
         });
       }
     } else if (type === "right") {
       this.changeSlideArrow();
     }
     this.arrowInterval = setInterval(this.changeSlideArrow, 3000);
   };
   componentWillUnmount() {
     clearInterval(this.arrowInterval);
   }
  render() { 
    const { smallerHeading, image, bigerHeading, text } = this.state

    return (
      <section id="customers" className="ourCustomers">
      <h1 className="everyMiddleHeading">Our customers</h1>
      <h4 className="everySmallestHeading">Testimonials</h4>
      <img className="ourCustomers__quote" src={listArrowQuote[0].img13} alt="quote" />
      <div className="ourCustomers__mainPart">
        <img
          onClick={()=>this.changeSlideClick('left')}
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
                this.index === 0 ? "dots__span active" : "dots__span"
              }
            ></span>
            <span
              className={
                this.index === 1 ? "dots__span active" : "dots__span"
              }
            ></span>
            <span
              className={
                this.index === 2 ? "dots__span active" : "dots__span"
              }
            ></span>
          </div>
        </figure>

        <img
          onClick={()=>this.changeSlideClick('right')}
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
   }
 
export default OurCustomers;

