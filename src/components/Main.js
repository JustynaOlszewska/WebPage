import React from 'react';
import "../styles/sass/_main.scss";
import OurServices from "./OurServices";
import AboutUs from "./AboutUs";
import OurCustomers from "./OurCustomers";



const Main = (props) => {
    
    return ( 
        <main className="main">
            <OurServices allFigureOurServices={props.allFigureOurServices}/>
<AboutUs />
<OurCustomers  index={props.index} smallerHeading={props.smallerHeading}bigerHeading={props.bigerHeading} image={props.image} text={props.text} click={props.click}/>
          </main>
     );
}
 
export default Main;