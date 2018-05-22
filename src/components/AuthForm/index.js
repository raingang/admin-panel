import React, { Component } from 'react';

class AuthForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
		}
	}
	onChangeInput = (e, fieldName) => {
		this.setState({
			[fieldName]: e.target.value,
		})
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogIn(this.state);
	}
	render() {
		return (
			<form onSubmit = {this.onSubmit}>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email"
					       className="form-control"
					       aria-describedby="emailHelp"
					       placeholder="Enter email"
					       onChange = {(e) => this.onChangeInput(e, 'email')}
					/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
							else.
						</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password"
					       className="form-control"
					       id="exampleInputPassword1"
					       placeholder="Password"
					       onChange = {(e) => this.onChangeInput(e, 'password')}
					/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default AuthForm;