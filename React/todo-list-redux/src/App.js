import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo id="1" title="test" data="this is an example" />
      </div>
    );
  }
}

const Todo = (props) => {
  const {id, title, data} = props;
  return (
    <div className="todo">
      <h1> {id} </h1>
      <h1> {title} </h1>
      <h1> {data} </h1>
    </div>
  );
}

export default App;
