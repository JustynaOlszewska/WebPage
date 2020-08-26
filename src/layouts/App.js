import React, {Fragment, Suspense } from "react";
import "../styles/sass/_mixins.scss";
import "../styles/sass/all.scss";
import Header from "../layouts/Header";

// import Main from "../layouts/Main";
const Main = React.lazy(() => import('../layouts/Main'));

// import Footer from "../layouts/Footer";
const Footer = React.lazy(() => import('../layouts/Footer'));




const App = () => {
  return ( 
      <Fragment>
        <div className="wrapper">
         
          <Header/>
           <Suspense fallback={<div>Wczytywanie...</div>}>
          <Main/>
          <Footer/>
          </Suspense>
        </div>

      </Fragment>
   );
}

export default App;

