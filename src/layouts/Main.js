import React, {Component} from 'react';
import "../styles/sass/_main.scss";
import {slider} from "../data/slider"
import {allFigureOurServices} from "../data/allFigureOurServices"

const OurServices = React.lazy(() => import('../components/OurServices'));

const AboutUs = React.lazy(() => import('../components/AboutUs'));

const OurCustomers = React.lazy(() => import('../components/OurCustomers'));




class Main extends Component {
  
    state = { 
       slider: [...slider],
      
        text:slider[0].text,
      image: slider[0].img,
      bigerHeading: slider[0].bigerHeading,
      smallerHeading: slider[0].smallerHeading,
     
     }
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
  //  console.log(this.state.slider)
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
<OurCustomers  index={this.index} smallerHeading={this.state.smallerHeading}bigerHeading={this.state.bigerHeading} image={this.state.image} text={this.state.text} click={this.changeSlideClick}/>
          </main>
        );
    }
}
 
export default Main;
