import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux'

const counter = (state = 0,action) => {
  switch(action.type) {
    case "INCREMENT":
      return state+1;
    case "DECREMENT":
      return state-1;
    default:
    	//for unknown actions we still need to update the state
      return state;
  }
}

const store  = createStore(counter);



//This is the key that allows the updates from the store which are caught by the subscribe to update
//the DOM
const render = () => {
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
store.subscribe(render);
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
render();
