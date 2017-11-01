import React, {Component} from "react";
import ReactDOM from "react-dom"

import "./CardList.css";



const Card = (props) => {

		//can have members inside function class
		//also can have an array of JSX
		let stars = [];			
		let starNumber = Math.floor(Math.random()*9 + 1);

		for(let i=0; i<starNumber; i++) {
			//appending JSX start
			stars.push(<li key={i} className="fa fa-star"></li>)
		}

		return (
			//JSX array of stars used here
			<div className = "flex">
				{stars}
				<img src= {props.user.avatar_url} />
				<span className="test2"> {props.user.Name} </span>
				<span> Show me something! </span>
				<button 
					onClick={ () => props.onDismiss(props.user.Key) } 
					type="button"
				>
					Click me to remove son! 
				</button>
			</div>
		);
	
}

//creating filter function outside of class to practice using state when it isn't in the scope by use of higher-order
//function
//we pass searchTerm to our higher-order function and return the resulting function

function isSearched(searchTerm) {
	//we are filtering so we are being passed in an item from filter and expect a true or false
	return function(item) {
			//!search term will only be relevent if it isnt defined which will force it to become true
			//if true it will return true automatically(not filtering anything)
			//if there is a search term it will return false moving to the other side of the or(||)
			console.log(item);
		return !searchTerm ||
			item.Name.toLowerCase().includes(searchTerm.toLowerCase());
	}
}



class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			random: true,
			data: [
				{ Key: 1, Name: "Alex", avatar_url: "https://avatars0.githubusercontent.com/u/6961145?v=4", company:"Terra.ai"},
				{ Key: 2, Name: "Carla", avatar_url: "https://avatars0.githubusercontent.com/u/6961145?v=4", company:"Badass"},
				{ Key: 3, Name: "Sparkle", avatar_url: "https://avatars0.githubusercontent.com/u/6961145?v=4", company:"My puppy!"}
			],
			searchTerm: "",
		};

		this.onDismiss = this.onDismiss.bind(this);
		//moved this outside of class to test higher-order function
		this.onSearchChange = this.onSearchChange.bind(this);
	}

	onDismiss(id) {
		const isNotId = (item) => {
			console.log(item.Key);
			return item.Key !== id;
		}
		const updatedList = this.state.data.filter(isNotId);
		this.setState({data: updatedList});
	}
	
	onSearchChange(event) {
		this.setState({
			searchTerm: event.target.value
		});
	}
	

	

	render() {
		const myFunct = this.onDismiss;
		//const { random, searchTerm, searchTerm} = this.state;
		return (
			/*<Card user = {data[0]} /> */
			<div className="App">
				<form>
					/* 
					Need to chnage react input component from controlled component(handles own state)
					to an uncontrolled state
					*/
					<label> Please enter the term you want to filter by
						<input 
						type="text"
						onChange={this.onSearchChange}
						/* this field makes it an uncontrolled component */
						value={this.state.searchTerm}
						/>
					</label>
				</form>


				{this.state.data.filter(isSearched(this.state.searchTerm)).map( function(item) {
					return (
						<div key={item.key}>
							<Card user = {item} onDismiss={this.onDismiss} />
						</div>
					);
				}, this)}

			</div>
		)
	}


}


export default CardList;