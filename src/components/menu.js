import React, { Component } from 'react'
import BreakfastCard from './BreakfastCard';

import './menu.css';

 class Menu extends Component {
  state = {
    renderView: 0
  };

  clickBtn = e => {
    this.setState({
      renderView: +e.target.value
    });
  };
    render() {
      switch (this.state.renderView) {

      }
        return (
            <div className="button-nav">
                
  <nav>
    <div className="button">
      
  
            
        <button className="breakfast-btn" onClick = "showTable()" >Desayuno</button>
        <button className="breakfast-btn" onClick = "showTable()" >Comida/cena</button>
         <input type="search" required name = "searchBox"  className= "search-input"  id = "search" placeholder = "buscar producto"></input>   
        
  
    

      
    </div>

   
    
  </nav>
            
            </div>



   
     
  
 

            
        )
    }
}

export default Menu; 