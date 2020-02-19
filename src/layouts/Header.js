import React, { Component } from "react";
import List from "../components/List";
import "../styles/sass/_header.scss";
// import Slider from "react-slick";
import { logoImages } from "../data/logo";
import { imagesToHeader } from "../data/image";
import { nameElementList } from "../data/nameElementList";
class Header extends Component {
  state = {
    active: true,
    imagesdataToHeader: [...imagesToHeader]
  };

  getData() {
    this.setState({
      imagesdataToHeader: [...imagesToHeader]
    });
  }
  componentDidMount() {
    this.changeSlideTop = setInterval(this.changeSlide, 3000);
  }

  changeSlide = () => {
    if (this.state.active === true) {
      this.setState({
        active: !this.state.active
      });
    } else if (this.state.active === false) {
      this.setState({
        active: !this.state.active
      });
    }
  };

  componentWillUnmount() {
    clearInterval(this.changeSlideTop);
  }
  render() {

    const newLogoImages = logoImages;

    return (
      <header
        className="header"
        style={
          this.state.active
            ? {
                backgroundImage: `url(${this.state.imagesdataToHeader[0].img4})`
              }
            : {
                backgroundImage: `url(${this.state.imagesdataToHeader[0].img5})`
              }
        }
      >
        <h1 name="gora" className="header__heading">
          Let's turn your idea <br /> into digital product
        </h1>
        <div className="header__logo">
          <img
            className="header__logo-img1"
            src={newLogoImages[0].img1}
            alt="img1"
          />
          <img
            className="header__logo-img2"
            src={newLogoImages[0].img2}
            alt="img2"
          />
          <img
            className="header__logo-img3"
            src={newLogoImages[0].img3}
            alt="img3"
          />
          <div className="header__logo-triangle"></div>

          <h4 className="header__logo-heading">olusio</h4>
        </div>
        <List nameElementList={nameElementList} />

        <a href="http://www.wp.pl" className="allButtons">
          Know more
        </a>
        <div className="dots">
          <span
            className={
              this.state.active === true ? "dots__span active" : "dots__span"
            }
          ></span>
          <span
            className={
              this.state.active === false ? "dots__span active" : "dots__span"
            }
          ></span>
        </div>
      </header>
    );
  }
}

export default Header;
