import React from 'react';
const ElementList = (props) => {
    console.log('ac', props.active)
    const newList = props.nameElementList.map(element=> {
        
        return(
              <li id={element.key} key = {element.href} className={`list__element ${props.active}`}>
        <a className={`list__element-link ${props.active}`} href={element.href}>
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