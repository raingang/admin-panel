import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { validateForm } from "../../utils";

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: this.props.firstName || '',
            lastName: this.props.lastName || '',
            age: this.props.age || 1,
            visits: this.props.visits || 0,
            progress: this.props.progress || 0,
            status: this.props.status || '',
	        id: this.props.id,
        }
    }

    onInputChange = (e, stateName) => {
      this.setState({
        [stateName]: e.target.value.toLowerCase(),
      });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(validateForm(this.state)) {
	        this.props.handleAction(this.state);
	        this.props.handleClose && this.props.handleClose();
        }
    }

    render(){
        return(
            <form onSubmit = { this.onSubmit }>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">First Name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="John"
                               value = { this.state.firstName }
                               onChange = { (e) => this.onInputChange(e, 'firstName') }/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Last Name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Doe"
                               value = { this.state.lastName }
                               onChange = { (e) => this.onInputChange(e, 'lastName') }/>
                    </div>
                    </div>
                <div className="form-group">
                    <label htmlFor="inputAge">Age</label>
                    <input min = '0'
                           max = '100'
                           type="number"
                           className="form-control"
                           placeholder="18"
                           value = { this.state.age }
                           onChange = { (e) => this.onInputChange(e, 'age') }/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputVisits">Visits</label>
                    <input min = '0'
                           type="number"
                           className="form-control"
                           value = { this.state.visits }
                           onChange = { (e) => this.onInputChange(e, 'visits') }/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputProgress">Progress</label>
                    <input min = '0'
                           type="number"
                           className="form-control"
                           value = { this.state.progress }
                           onChange = { (e) => this.onInputChange(e, 'progress') }/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputState">Status</label>
                    <select id="inputState"
                            className="form-control"
                            onChange = { (e) => this.onInputChange(e, 'status') }>
                        <option>Single</option>
                        <option>Relationship</option>
                        <option>Complicated</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">{this.props.children}</button>
          </form>
        )
    }
};

UserForm.propTypes = {
	handleAction: PropTypes.func,
	handleClose: PropTypes.func,
	dispatch: PropTypes.func,
}

export default UserForm;
