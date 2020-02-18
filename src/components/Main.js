import React, {Component} from 'react';
import "../styles/sass/_main.scss";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import OurCustomers from "./OurCustomers";
import {allFigureOurServices} from "../data/allFigureOurServices"
import {slider} from "../data/slider"

import img14 from "../img/girl-1208207_640.jpg";

class Main extends Component {
    state = { 
        text:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrumLorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrum cupiditate aliquid exercitationem, accusamus autem et quinam ipsa nihil dolore adoloremque quis placeat Lorem,ipsum dolor sit amet consectetur adipisicing elit. Hic odioex fugit ullam corrupti possimus. Eaque neque voluptate suntvoluptatum ex modi nemo inventore aliquid, distinctionesciunt quidem quibusdam magn",
      image: img14,
      bigerHeading: " Joanna Stanley",
      smallerHeading: "  Big Data Company",
    
     }
     index = 0;

     componentDidMount() {  
        this.arrowInterval = setInterval(this.changeSlideArrow, 3000);
      }

     changeSlideArrow = () => {
      console.log()
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
              text:slider[this.index].text,
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
       
        return (  
            <main className="main">
            <OurServices allFigureOurServices={allFigureOurServices}/>
<AboutUs />
<OurCustomers  slider={slider} index={this.index} smallerHeading={this.state.smallerHeading}bigerHeading={this.state.bigerHeading} image={this.state.image} text={this.state.text} click={this.changeSlideClick}/>
          </main>
        );
    }
}
 
export default Main;
