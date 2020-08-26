import React from 'react';
import { allFigureOurServices } from "../data/allFigureOurServices"
const AllFigure = React.lazy(() => import('./AllFigure'));


const OurServices = () => {

    return (
        <section id="ourServices" className="ourServices">
            <h1 className="everyMiddleHeading">Our services</h1>
            <h4 className="everySmallestHeading">What we can do</h4>
            <AllFigure allFigureOurServices={allFigureOurServices}/>
            
        </section>
    );
}

export default OurServices;
