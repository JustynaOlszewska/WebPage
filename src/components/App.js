import React, { Component, Fragment } from "react";
// import ReactDOM from 'react-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/sass/_mixins.scss";
import "../styles/sass/_base.scss";
import "../styles/sass/index.scss";

import img4 from "../img/keyboard-622456_1920.jpg";
import img5 from "../img/laptop-698609_1920.jpg";



class App extends Component {
  state = {
    backgroundImage: `url(${img4})`,

    active: true,
    
  };



 
  componentDidMount() {
    this.changeSlideTop = setInterval(this.changeSlide, 3000);

    // this.arrowInterval = setInterval(this.changeSlideArrow, 3000);
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

  componentWillUnmount() {
    clearInterval(this.changeSlideTop);
    // clearInterval(this.arrowInterval);
  }
  render() {
    const {
      backgroundImage,
      active,
      textInput,
      emailInput,
      textareaInput,
    } = this.state;

    return (
      <Fragment>
        <div className="wrapper">
          <Header
        
            backgroundImage={backgroundImage}
            active={active}
          />
          <Main
        
            // click={this.changeSlideClick}
            // text={text}
            // image={image}
            // bigerHeading={bigerHeading}
            // smallerHeading={smallerHeading}
            // index={this.index}
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
