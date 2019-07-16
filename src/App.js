
import React, { Component } from 'react';
import Header from './components/header';
import Title from './components/title';
import Menu from './components/menu';
import BreakfastCard from './components/BreakfastCard';
import LunchCard from './components/LunchCard';
import './App.css';

class App extends Component {
  render () {

    return (
      <div className="App">

    <Header/>
    <Title/>
    <Menu/>
    <BreakfastCard/>
    <LunchCard/>
    

      </div>
    );
  }
  }

export default App;

