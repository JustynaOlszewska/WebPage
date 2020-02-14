import React from 'react';
import List from "./List"
import "../styles/sass/_header.scss";
import img1 from "../img/icons8-triangle-arrow-48 (1).png";
import img2 from "../img/icons8-triangle-arrow-48 (2).png";
import img3 from "../img/icons8-triangle-arrow-48.png";


const Header = (props) => {
    return ( 
        <header
        className="header"
   
        style={{ backgroundImage: props.backgroundImage }}

        >

        <h1 name="gora" className="header__heading">
          Let's turn your idea <br /> into digital product
        </h1>
        <div className="header__logo">
          <img className="header__logo-img1" src={img1} alt="img1" />
          <img className="header__logo-img2" src={img2} alt="img2" />
          <img className="header__logo-img3" src={img3} alt="img3" />
          <div className="header__logo-triangle"></div>

          <h4 className="header__logo-heading">olusio</h4>
        </div>
        <List nameElementList={props.nameElementList}/>
       
        <a href="http://www.wp.pl" className="allButtons">
          Know more
        </a>
        <div className="dots">
          <span
            className={
              props.active === true
                ? "dots__span active"
                : "dots__span"
            }
          ></span>
          <span
            className={
            props.active === false
                ? "dots__span active"
                : "dots__span"
            }
          ></span>
        </div>
      </header>
     );
}
 
export default Header;