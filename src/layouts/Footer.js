import React, { Component } from 'react';
import "../styles/sass/_footer.scss";
import img1 from "../img/icons8-triangle-arrow-48 (1).png";
import img2 from "../img/icons8-triangle-arrow-48 (2).png";
import img3 from "../img/icons8-triangle-arrow-48.png";
import img17 from "../img/icons8-up-24.png";   

class Footer extends Component {
 

  state = {
    textInput: "",
    emailInput: "",
    textareaInput: ""
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

  render() {
    
    const { textInput, emailInput, textareaInput } = this.state
    return (
      <footer id="contact" className="footer">
        <h1 className="everyMiddleHeading">Contact width us</h1>
        <h4 className="everySmallestHeading">Let's talk</h4>
        <div className="footer__formImg">
          <figure className="footer__formImg-imgLeft">
            <img className="footer__img" src={img1} alt="triangleYellow" />
            <img className="footer__img" src={img2} alt="trianglePurple" />
          </figure>

          <form
            onSubmit={this.handleSubmit}
            className="footer__formImg-form"
          >
            <input
              className="footer__formImg-text text"

              id="text"
              name="textInput"
              value={textInput}
              onChange={this.handleTextChange}
              placeholder="  Name"
            />
            <input
              className="footer__formImg-text text"

              id="email"
              name="emailInput"
              value={emailInput}
              onChange={this.handleEmailChange}
              placeholder="  E-mail or phone"
            />
            <textarea
              className="footer__formImg-text textArea"
              placeholder="  message"

              id="textarea"
              name="textareaInput"
              value={textareaInput}
              onChange={this.handleAreaChange}
            ></textarea>
            <button className="allButton">Send</button>

          </form>

          <figure className="footer__formImg-imgRight">
            <img className="footer__img" src={img1} loading="lazy" alt="triangleYellow" />
            <img className="footer__img" src={img3} loading="lazy" alt="triangleBlue" />
          </figure>
        </div>
        <hr className="line" />
        <div className="goBack">
          <a href="#gora" className="goBack__arrowUp">
            <img src={img17} alt="arrowUp" />
          </a>
          <h6 className="goBack__everySmallestHeading"> Back to top</h6>
          <h6 className="goBack__everySmallestHeading">
            https://icons8.com
          </h6>
        </div>
      </footer>
    );
  }
}

export default Footer;
