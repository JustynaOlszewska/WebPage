import React from 'react';
import PropTypes from 'prop-types';

const AllFigure = ({allFigureOurServices}) => {
  
    let newAllFigure = allFigureOurServices.map(element=> {
        return(
            <figure key={element.texth4} className="ourServices__container">
            <img className="ourServices__image" src={element.img} alt={element.alt} />
            <figcaption>
              <h4 className="ourServices__heading">{element.texth4}</h4>
              <p className="ourServices__text">
                Lorem ipsum dolor sit amet
              </p>
            </figcaption>
          </figure>
        )
    })
    return (  
        <div className="ourServices__allFigure">
{newAllFigure}
        </div>
    );
}
 
AllFigure.propTypes = {
  allFigure: PropTypes.string
}
export default AllFigure;