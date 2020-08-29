import React, { Suspense } from 'react';
import "../styles/sass/_main.scss";
import { allFigureOurServices } from "../data/allFigureOurServices"

const OurServices = React.lazy(() => import('../components/OurServices'));

const AboutUs = React.lazy(() => import('../components/AboutUs'));

const OurCustomers = React.lazy(() => import('../components/OurCustomers'));


const Main = () => {

  return (
    <main className="main">
      <Suspense fallback={<div>Loading...</div>}>
        <OurServices allFigureOurServices={allFigureOurServices} />
        <AboutUs />
        <OurCustomers />
      </Suspense>
    </main>
  );

}

export default Main;
