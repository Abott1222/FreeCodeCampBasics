import "./Form.css";


import React, {Component} from "react";
import ReactDOM from "react-dom";


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			searchTerm: '',
			//handleChange: this.props.handleChange,
			onSubmit: this.props.onSubmit
		};

		this.handleChangeX = this.handleChangeX.bind(this);
	}

	handleChangeX(event) {
		this.setState({
			searchTerm: event.target.value
		});

		console.log(this.state.searchTerm);
	}

	render() {
		return (
			<form onSubmit={() => {this.onSubmit(this.state.searchTerm)}>
				<label>
					Please enter the name that you would like to filter by
					<input type="text" placeholder="Name" 
					onChange= {this.handleChangeX}
					value={this.state.searchTerm}
					/>
				</label>
				<button type="submit"> Submit </button>
			</form>
		);
	}


}

export default Form;