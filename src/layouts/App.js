import React, { Fragment, Suspense } from "react";
import "../styles/sass/_mixins.scss";
import "../styles/sass/all.scss";
import Header from "../layouts/Header";

const Main = React.lazy(() => import('../layouts/Main'));

const Footer = React.lazy(() => import('../layouts/Footer'));

const App = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Main />
          <Footer />
        </Suspense>
      </div>
    </Fragment>
  );
}

export default App;

