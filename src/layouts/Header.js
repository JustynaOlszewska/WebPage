
import React, { Component } from "react";
import SimpleSlider from "../layouts/SimpleSlider.js";
import "../styles/sass/_header.scss";
import { imagesToHeader } from "../data/image";
import { logoImages } from "../data/logo";
import List from "../components/List";
import { nameElementList } from "../data/nameElementList";


class Header extends Component {

  render() {


    const newLogoImages = logoImages.map(image=> {
      return(
        <img
        className="header__logo-img1"
        src={image}
        alt="img1"
       
      />
      )
    })
    return (
     <div>
      <SimpleSlider images={imagesToHeader}/>
  
            <List nameElementList={nameElementList} />  
            <div className="header__logo">
      {newLogoImages}
     
       <div className="header__logo-triangle"></div>

       <h4 className="header__logo-heading">olusio</h4>
      </div>
        </div> 

    );
  }
}

export default Header;
