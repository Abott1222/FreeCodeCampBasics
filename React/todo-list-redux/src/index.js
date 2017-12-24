import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//add redux
import { createStore, applyMiddleware, compose } from 'redux'


//todo Reducer

const todos = (state=[], action) => {
	switch(action.type) {
		case "ADD-TODO":
			//es6 spread syntax
			//parts of todo {id, title, data, completed} = props;
			return [...state,
				{
					id: action.id,
					title: action.title,
					data: action.data,
					completed: false
				}
			];
		case "TOGGLE-TODO":
			state.map( (todo) => {
				if(todo.id !== action.id) return todo;
				else return ...todo, completed: completed!;
			}
		default:
			return state;
	}
}

let store = createStore(todos);

const render = () => {
	alert("updated");
	ReactDOM.render(<App store={store} todos={store.getState()}/>, document.getElementById('root'));
}
store.subscribe(render);
registerServiceWorker();
render();
