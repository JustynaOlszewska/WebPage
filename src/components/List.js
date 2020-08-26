import React, { Component } from 'react';
import ElementList from "./ElementList";
import {nameElementList} from "../data/nameElementList";

class List extends Component {
    state = { 
        active: 'sleep'
     }
    handleClickHamburger=()=> {
   
       switch(this.state.active) {
           case "sleep":
                this.setState({
                active: 'active'
            })
               return (this.state.active);
            case "active" :

                this.setState({
                 active: 'sleep'
             })
                return (this.state.active)
             default:
              return
       }

                       

                    }
    render() { 
console.log('t', this.state.active)
            
                    return (
                        <nav id="gora" className="header__menu">
                
                            <ElementList active={this.state.active} nameElementList={nameElementList} />
                            <div onClick={this.handleClickHamburger} className="hamburger" >
                                <i className="fas fa-bars"></i>
                            </div>
                        </nav>
                    );
         
    }
}
 
export default List;

// const List = (props) => {
//    const handleClickHamburger=()=> {
//        console.log('vlik')
// return (
//     <ElementList class="active" nameElementList={props.nameElementList} />
// )
//     }
//     return (
//         <nav id="gora" className="header__menu">

//             <ElementList nameElementList={props.nameElementList} />
//             <div onClick={handleClickHamburger} className="hamburger" >
//                 <i className="fas fa-bars"></i>
//             </div>
//         </nav>
//     );
// }

// export default List;