    
import  React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';


class BreakfastCard extends Component {

   state = {
       prices: [40, 45, 50],
       positions: ['Sandwich de jamón', 'Hotcakes', 'Waffles'],
       desc: [
        "https://purepng.com/public/uploads/large/purepng.com-sandwichfood-slice-salad-tasty-bread-vegetable-health-delicious-breakfast-sandwich-941524618174fdhlh.png",
        'http://pngimg.com/uploads/pancake/pancake_PNG88.png',
        'http://pngimg.com/uploads/waffle/waffle_PNG57.png'
    ],
      
    
   }

   showBoxes = () => (
      this.state.prices.map((box, i)=> (
        
          <div className = "pricing_item">
              <div className = "pricing_inner_wrapper">
                  <div className = "pricing_title">



                  <CardActionArea
                  style = {{
                      width: '20%',
                     
                     
                  }}
                  >
                  <div class="row">
    <div class="col s12 m6">
      <div class="card black darken-1" >
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
  
  </CardActionArea>
        

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

export default BreakfastCard;