import React from 'react';

const AllFigure = (props) => {
    // console.log(props.allFigureOurServices)
    let newAllFigure = props.allFigureOurServices.map(element=> {
        return(
            <figure key={element.texth4} className="ourServices__container">
            <img className="ourServices__image" src={element.img} loading="lazy" alt={element.alt} />
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
 
export default AllFigure;