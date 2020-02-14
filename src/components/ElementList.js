import React from 'react';
const ElementList = (props) => {
    const newList = props.nameElementList.map(element=> {
        return(
              <li id={element.key} key = {element.href} className="list__element">
        <a className="list__element-link" href={element.href}>
         {element.name}
        </a>
      </li>
        )
      
    })
    return ( 
        <ul className="list">
            {newList}
      </ul>
     );
}
 
export default ElementList;