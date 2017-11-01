import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import MyButton from "../Button/Button";
import CardList from "../CardList/CardList";

//function component syntax

const Result = (props) => {
  return (
    <div> {props.counter} </div>
  );
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
  }

  handleClick = () => {
    
    this.setState( (prevState) => {
      return {
        counter:prevState.counter+1
      }
    });

  }


  render() {
    //note return can only return ONE thing so if you need to return two rap them in a div
    return (
      <div className="App" >
        <MyButton myOnClickFunction={this.handleClick} />
        <Result  counter={this.state.counter} />
        <CardList />  
      </div>
    );
  }
}


export default App;
