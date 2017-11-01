import React, {Component} from "react";

import "./Button.css";

class MyButton extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			counter: this.props.counter
		}
	}
	

	/*
	//handleClick() {
		//this.setState( function(prevState) {
			//counter: prevState.counter + 1
		//});
	//}

	handleClick = () => {
		console.log("CLicked!");
		console.log(typeof this.state.counter);
		/*
		This is bad because setState is asynchronous and we are reading and setting state at same time... potential race condition
		this.setState({
			counter: this.state.counter + 1,
		})

		
		this.setState( (prevState) => {
			return  {
				counter: prevState.counter + 1
			};
		})
	};

	*/




	render() {
		return (
			<button className = "test"
			onClick = {this.props.myOnClickFunction}> 
				Click me! +!
			</button> 
		);
	}
}

export default MyButton;