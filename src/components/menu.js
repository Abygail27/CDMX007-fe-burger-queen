import React, { Component } from 'react'
import './menu.css';

 class Menu extends Component {
    render() {
        return (
            <div className="button-nav">
                
  <nav>
    <div className="nav-wrapper">
      
      <ul className="right hide-on-med-and-down">
        <li><a className="breakfast-btn">Desayuno</a></li>
        <li><a className="lunch-btn">Comida/Cena</a></li>
        <li>
            <input type="search" required name = "searchBox"  className= "search-input"  id = "search" placeholder = "buscar producto"></input>   
        </li>
  
      </ul>
    </div>

   
    
  </nav>
            
            </div>



   
     
  
 

            
        )
    }
}

export default Menu; 