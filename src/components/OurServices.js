import React from 'react';
import AllFigure from "./AllFigure"
import {allFigureOurServices} from "../data/allFigureOurServices"
const OurServices = (props) => {

    return (         
        <section id="ourServices" className="ourServices">
            
        <h3 className="everyMiddleHeading">Our services</h3>
        <h6 className="everySmallestHeading">What we can do</h6>
<AllFigure allFigureOurServices={allFigureOurServices} />
        
      </section>
     );
}
 
export default OurServices;
