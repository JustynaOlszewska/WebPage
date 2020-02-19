import React, {Fragment } from "react";

import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";

import "../styles/sass/_mixins.scss";

import "../styles/sass/all.scss";


const App = () => {
  return ( 
      <Fragment>
        <div className="wrapper">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </Fragment>
   );
}
 
export default App;

