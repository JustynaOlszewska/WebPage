import React from 'react';
import ElementList from "./ElementList"
const List = (props) => {
    return ( 
        <nav id="gora" className="header__menu">
            <ElementList nameElementList={props.nameElementList}/>
       
      </nav>
     );
}
 
export default List;