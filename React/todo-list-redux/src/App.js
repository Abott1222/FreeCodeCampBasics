import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let numTodos = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: props.store,
      todos: props.todos,
    }
  }

  //this.state.store.getState().map
  //or
  //this.state.store.subscribe

  /* !!! WHY IS this.getState().map not working! */
  render() {
    let todos = this.state.store.getState();
    console.log(todos);
    return (
      <div className="App">
         <Todo id="1" title="test" data="this is an example" complete="false" />

         <button onClick= { () => {
          this.state.store.dispatch({type:"ADD-TODO", id: numTodos++, title: "Something clever", data: "nothing to see here"});
          //this.setState({numTodos: numTodos+1});
         }}>Add some shit</button>

         <ul>
         {
          todos.map( todo => {
            return (
              <li key={todo.id} className="todo" onClick= { () => {
                  this.state.store.dispatch({
                    type: "TOGGLE-TODO",
                    id: todo.id
                  })
                } 
              }>
                <div style={{
                  textDecoration: todo.completed ?
                    "line-through" : "none"
                }}>
                  <h1> {todo.title} </h1>
                  <h3> {todo.data} </h3>
                </div>
              </li>
            );
          })
         }
         </ul>
      </div>
    );
  }
}

const Todo = (props) => {
  const {id, title, data, completed} = props;
  return (
    <div className="todo">
      <h1> {id} </h1>
      <h1> {title} </h1>
      <h1> {data} </h1>
      <h1> {completed === false ? "hello" : "not hello" } </h1>
    </div>
  );
}

export default App;
