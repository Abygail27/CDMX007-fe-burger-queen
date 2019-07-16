    
import  React, { Component } from 'react';



class LunchCard extends Component {

   state = {
       prices: [40, 45, 50],
       positions: ['Hamburguesa doble carne', 'Hamburguesa de pollo', 'Hamburguesa vegana'],
       desc: [
        'https://bakedpizza.com.co/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/h/a/hamburguesa_doble_carne_1.png',
        'https://d701vexhkz032.cloudfront.net/media/images/menu-content/MX/hamburguesas-de-pollo/mc-pollo.png',
        'https://www.homeburgerbar.com/sites/default/files/imagenes/categoria_plato/hamburguesa-vegetal-categoria.png'
       ]
    
   }

   showBoxes = () => (
      this.state.prices.map((box, i)=> (
        
          <div className = "pricing_item">
              <div className = "pricing_inner_wrapper">
                  <div className = "pricing_title">




                  <div class="row">
    <div class="col s12 m6">
      <div class="card black darken-1">
        <div class="card-content white-text">
         
        <img src={this.state.desc[i]} alt="breakfast" width = '200px'/>
        </div>
        <div class="card-action">
      
        <span>{this.state.positions[i]}</span> <br></br>
                    <span>${this.state.prices[i]}</span>
         
        </div>
      </div>
    </div>
  </div>
        

                  </div>
                 
                 
                 
              </div>
            
          </div>
       
      ))
   )

    render() {
        return (
            <div className = "bck_black">
                <div className = "center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className = "pricing_wrapper">
                   {this.showBoxes()}
                    </div>
                </div>
              
            </div>
        );
    }
}

export default LunchCard;