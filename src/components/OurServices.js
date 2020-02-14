import React from 'react';
import AllFigure from "./AllFigure"
const OurServices = (props) => {

    return (         
        <section id="ourServices" className="ourServices">
            
        <h3 className="everyMiddleHeading">Our services</h3>
        <h6 className="everySmallestHeading">What we can do</h6>
<AllFigure allFigureOurServices={props.allFigureOurServices} />
        
      </section>
     );
}
 
export default OurServices;
