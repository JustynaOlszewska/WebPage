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
            const { active } = this.state
                    return (
                        <nav id="gora" className="header__menu">
                
                            <ElementList active={active} nameElementList={nameElementList} />
                            <div onClick={this.handleClickHamburger} className="hamburger" >
                                <i className="fas fa-bars"></i>
                            </div>
                        </nav>
                    );
         
    }
}
 
export default List;
