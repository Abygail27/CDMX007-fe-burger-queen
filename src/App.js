
import React, { Component } from 'react';
import Header from './components/header';
import Title from './components/title';
import Menu from './components/menu';
import OrderCard from './components/headerContent/orders';

class App extends Component {
  render () {

    return (
      <div className="App">

    <Header/>
    <Title/>
    <Menu/>
    <OrderCard/>
    

      </div>
    );
  }
  }

export default App;

