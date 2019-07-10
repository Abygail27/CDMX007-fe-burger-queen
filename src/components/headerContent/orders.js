import  React, { Component } from 'react'


const FoodData = require('../data/FoodData.json');


 class OrderCard extends Component {
    render() {
        return (
            <div className = "card-content">
                  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
      <div class="card-content white-text">

      {FoodData.map((id, index)=>{
           return <img className="img-card" src={id.content} height = "77px" alt=""></img>
         })}

      <div class="card-action">
         {FoodData.map((id, index)=>{
           return <span>{id.title}</span>
         })}
         
        </div>

        </div>
        <div className="card-content white-text">
         
        </div>
        
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
         
        </div>
        
      </div>
    </div>
  </div>

              <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
         
        </div>
        
      </div>
    </div>
  </div>
               
            </div>
        )
    }
}
export default OrderCard;