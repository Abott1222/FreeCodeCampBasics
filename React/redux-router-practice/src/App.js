import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import logo from './logo.svg';
import './App.css';

//example reducer


const counter = (state = 0,action) => {
  switch(action.type) {
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
    default:
      return state;
  }
}





const Counter = ({value, onDecrement, onIncrement}) => {
  return (
    <div>
      <h1> {value} </h1>
      <button onClick={onDecrement}> - </button>
      <button onClick={onIncrement}> + </button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store:props.store,
      todos: this.store.getState();
    }

  }

  render() {
    return (
      <div className="App">
        <p>Hello! </p>
        <Counter 
        value={ this.state.store.getState() } 
        onDecrement = {() => {
            this.state.store.dispatch({
              type: "DECREMENT"
            });
          }
        }
        onIncrement={ () => {
            this.state.store.dispatch({
              type: "INCREMENT"
            });
          }
        }
        />
      </div>
    );
  }


}

export default App;
