import React, { Component, Fragment } from "react";
// import ReactDOM from 'react-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/sass/_mixins.scss";
import "../styles/sass/_base.scss";
import "../styles/sass/index.scss";
import img6 from "../img/icons8-web-50.png";
import img7 from "../img/icons8-rest-api-50.png";
import img8 from "../img/icons8-database-administrator-50.png";
import img9 from "../img/icons8-mobile-50.png";
import img4 from "../img/keyboard-622456_1920.jpg";
import img5 from "../img/laptop-698609_1920.jpg";

import img14 from "../img/girl-1208207_640.jpg";
import img15 from "../img/woman-3055841_640.jpg";
import img16 from "../img/business-woman-2697954_640.jpg";

class App extends Component {
  state = {
    backgroundImage: `url(${img4})`,

    active: true,
    text:
      "1 Lorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrumLorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrum cupiditate aliquid exercitationem, accusamus autem et quinam ipsa nihil dolore adoloremque quis placeat Lorem,ipsum dolor sit amet consectetur adipisicing elit. Hic odioex fugit ullam corrupti possimus. Eaque neque voluptate suntvoluptatum ex modi nemo inventore aliquid, distinctionesciunt quidem quibusdam magn",
    image: img14,
    bigerHeading: " Joanna Stanley",
    smallerHeading: "  Big Data Company",
    textInput: "",
    emailInput: "",
    textareaInput: ""
  };

  allFigureOurServices = [
    { img: img6, alt: "web", texth4: "Webdesign" },
    { img: img7, alt: "restapi", texth4: "API development" },
    { img: img8, alt: "database", texth4: "Backend" },
    { img: img9, alt: "mobile", texth4: "Mobile apps" }
  ];
  nameElementList = [
    { name: "Home", href: "#home", key: "home" },
    { name: "Our services", href: "#ourServices", key: null },
    { name: "AboutUs", href: "#aboutUs", key: null },
    { name: "Customers", href: "#customers", key: null },
    { name: "Contact", href: "#contact", key: null }
  ];
  index = 0;
  slider = [
    {
      text:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrumLorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrum cupiditate aliquid exercitationem, accusamus autem et quinam ipsa nihil dolore adoloremque quis placeat Lorem,ipsum dolor sit amet consectetur adipisicing elit. Hic odioex fugit ullam corrupti possimus. Eaque neque voluptate suntvoluptatum ex modi nemo inventore aliquid, distinctionesciunt quidem quibusdam magn",
      img: img14,
      bigerHeading: " Joanna Stanley",
      smallerHeading: "Big Data Company"
    },
    {
      text:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrumLorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrum cupiditate aliquid exercitationem, accusamus autem et quinam ipsa nihil dolore adoloremque quis placeat Lorem,ipsum dolor sit amet consectetur adipisicing elit. Hic odioex fugit ullam corrupti possimus. Eaque neque voluptate suntvoluptatum ex modi nemo inventore aliquid, distinctionesciunt quidem quibusdam magn",
      img: img15,
      bigerHeading: " Gabriela Wolska",
      smallerHeading: "Big Data Company2"
    },
    {
      text:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrumLorem ipsum dolor sit amet consectetur adipisicing elit Eos soluta doloribus ea officia veritatis, nostrum cupiditate aliquid exercitationem, accusamus autem et quinam ipsa nihil dolore adoloremque quis placeat Lorem,ipsum dolor sit amet consectetur adipisicing elit. Hic odioex fugit ullam corrupti possimus. Eaque neque voluptate suntvoluptatum ex modi nemo inventore aliquid, distinctionesciunt quidem quibusdam magn",
      img: img16,
      bigerHeading: " Beata Zawilska",
      smallerHeading: "Big Data Company3"
    }
  ];
  componentDidMount() {
    this.changeSlideTop = setInterval(this.changeSlide, 3000);

    this.arrowInterval = setInterval(this.changeSlideArrow, 3000);
  }
  handleTextChange = e => {
    this.setState({
      textInput: e.target.value
    });
  };
  handleEmailChange = e => {
    this.setState({
      emailInput: e.target.value
    });
  };
  handleAreaChange = e => {
    this.setState({
      textareaInput: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  changeSlide = () => {
    if (this.state.active === true) {
      this.setState({
        active: !this.state.active,
        backgroundImage: `url(${img5})`,
      });
    } else if (this.state.active === false) {
      this.setState({
        active: !this.state.active,
        backgroundImage: `url(${img4})`,

      });
    }
  };

  changeSlideArrow = () => {
    // debugger
    this.index++;
    if (this.index < this.slider.length) {
      this.setState({
        text: this.slider[this.index].text,
        image: this.slider[this.index].img,
        bigerHeading: this.slider[this.index].bigerHeading,
        smallerHeading: this.slider[this.index].smallerHeading
      });
    } else if (this.index >= this.slider.length - 1) {
      this.index = 0;
      this.setState({
        text: this.slider[this.index].text,
        image: this.slider[this.index].img,
        bigerHeading: this.slider[this.index].bigerHeading,
        smallerHeading: this.slider[this.index].smallerHeading
      });
    }
  };
  changeSlideClick = type => {
    clearInterval(this.arrowInterval);
    if (type === "left") {
      this.index--;
      if (this.index >= 0) {
        this.setState({
          text: this.slider[this.index].text,
          image: this.slider[this.index].img,
          bigerHeading: this.slider[this.index].bigerHeading,
          smallerHeading: this.slider[this.index].smallerHeading
        });
      } else if (this.index < 0) {
        this.index = this.slider.length - 1;
        this.setState({
          text: this.slider[this.index].text,
          image: this.slider[this.index].img,
          bigerHeading: this.slider[this.index].bigerHeading,
          smallerHeading: this.slider[this.index].smallerHeading
        });
      }
    } else if (type === "right") {
      this.changeSlideArrow();
    }
    this.arrowInterval = setInterval(this.changeSlideArrow, 3000);
  };
  componentWillUnmount() {
    clearInterval(this.changeSlideTop);
    clearInterval(this.arrowInterval);
  }
  render() {
    const {
      backgroundImage,
      active,
      image,
      bigerHeading,
      smallerHeading,
      textInput,
      emailInput,
      textareaInput,
      text
    } = this.state;

    return (
      <Fragment>
        <div className="wrapper">
          <Header
            nameElementList={this.nameElementList}
            backgroundImage={backgroundImage}
            active={active}
          />
          <Main
            allFigureOurServices={this.allFigureOurServices}
            click={this.changeSlideClick}
            text={text}
            image={image}
            bigerHeading={bigerHeading}
            smallerHeading={smallerHeading}
            index={this.index}
          />
          <Footer
            changeArea={this.handleAreaChange}
            textareaInput={textareaInput}
            changeEmail={this.handleEmailChange}
            emailInput={emailInput}
            change={this.handleTextChange}
            textInput={textInput}
            submit={this.handleSubmit}
          />
        </div>
      </Fragment>
    );
  }
}
export default App;
