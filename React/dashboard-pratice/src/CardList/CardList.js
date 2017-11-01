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
		return (
			//<Card user = {data[0]} />
			<div className="App">
				<form>
					<label> Please enter the term you want to filter by
						<input type="text"
						onChange={this.onSearchChange}
						/>
					</label>
				</form>


				{this.state.data.filter( (item) => {
					//console.log(item.Name.) 
					return item.Name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
							}).map( function(item) {
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