import React, { Component } from 'react';

import '../../styles/FilterForm/index.css'

class FilterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			label: '',
			value: ''
		}
	}

	onInputChange = (e, stateName) => {
		this.setState({
			[stateName]: e.target.value.toLowerCase(),
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if(this.state.label && this.state.value){
			this.props.setFilter({
				label: this.state.label,
				value: this.state.value,
			})
		}
	}

	render() {
		return (
			<form onSubmit = {this.onSubmit} className = 'form-row'>
				<div className = 'form-group col-md-4'>
					<select id="inputState"
					        className="form-control"
					        onChange = { (e) => this.onInputChange(e, 'label') }
					>
						<option>First Name</option>
						<option>Last Name</option>
						<option>Age</option>
					</select>
				</div>
				<div className = 'form-group col-md-6'>
					<input type = 'text'
					       className = 'form-control'
					       onChange = { (e) => this.onInputChange(e, 'value') }
					/>
				</div>
				<button type = 'submit' className = 'btn btn-outline-primary btn-xs'>Filter</button>
			</form>
		)
	}
}

export default FilterForm;