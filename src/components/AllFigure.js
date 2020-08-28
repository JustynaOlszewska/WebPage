import React from 'react';
import PropTypes from 'prop-types';

const AllFigure = ({allFigureOurServices}) => {
  
    let newAllFigure = allFigureOurServices.map(({texth4, img, alt, })=> {
        return(
            <figure key={texth4} className="ourServices__container">
            <img className="ourServices__image" src={img} alt={alt} />
            <figcaption>
              <h4 className="ourServices__heading">{texth4}</h4>
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