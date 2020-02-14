import React from 'react';
import "../styles/sass/_footer.scss";
import img1 from "../img/icons8-triangle-arrow-48 (1).png";
import img2 from "../img/icons8-triangle-arrow-48 (2).png";
import img3 from "../img/icons8-triangle-arrow-48.png";
import img17 from "../img/icons8-up-24.png";
const Footer = (props) => {
    return ( 
        <footer id="contact" className="footer">
        <h3 className="everyMiddleHeading">Contact width us</h3>
        <h6 className="everySmallestHeading">Let's talk</h6>
        <div className="footer__formImg">
          <figure className="footer__formImg-imgLeft">
            <img className="footer__img" src={img1} alt="triangleYellow" />
            <img className="footer__img" src={img2} alt="trianglePurple" />
          </figure>

          <form
            onSubmit={props.submit}
            className="footer__formImg-form"
          >
            <input
              className="footer__formImg-text text"
            
              id="text"
              name="textInput"
              value={props.textInput}
              onChange={props.change}
              placeholder="  Name"
            />
            <input
              className="footer__formImg-text text"
            
              id="email"
              name="emailInput"
              value={props.emailInput}
              onChange={props.changeEmail}
              placeholder="  E-mail or phone"
            />
            <textarea
              className="footer__formImg-text textArea"
              placeholder="  message"
           
              id="textarea"
              name="textareaInput"
              value={props.textareaInput}
              onChange= {props.changeArea} 
            ></textarea>
            <button className="allButton">Send</button>
         
          </form>

          <figure className="footer__formImg-imgRight">
            <img className="footer__img" src={img1} alt="triangleYellow" />
            <img className="footer__img" src={img3} alt="triangleBlue" />
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
 
export default Footer;