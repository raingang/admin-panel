import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/UserPage/index.css';
import Spinner from '../Spinner';
import UserForm from '../UserForm';

class UserPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			isEdit: false,
		}
	}

    componentDidMount() {
        const id = +this.props.match.params.id;
        this.props.getUser(id);
    }

    onDelete = () => {
    	const status = window.confirm(`Are you really want to delete user ${this.props.user.firstName}`);
    	if (status) {
		    this.props.handleDelete(this.props.user.id);
		    this.props.history.push('/users');
	    }
    }

    onToggleEdit = () => {
		this.setState((state) => ({ isEdit: !state.isEdit }));
    }

    renderUser() {
	    const { id, firstName, lastName, age, visits, progress, status } = this.props.user;
	    return (
			<div className='content detailed-content'>
				<div className='user'>
					<ul className='list-group user-list'>
						<li className = 'list-group-item d-flex justify-content-between align-items-center'>id:
							<span className="badge badge-primary badge-pill">{id}</span>
						</li>
						<li className = 'list-group-item d-flex justify-content-between align-items-center'>firstName:
							<span className="badge badge-primary badge-pill">{firstName}</span>
						</li>
						<li className = 'list-group-item d-flex justify-content-between align-items-center'>lastName:
							<span className="badge badge-primary badge-pill">{lastName}</span>
						</li>
						<li className = 'list-group-item d-flex justify-content-between align-items-center'>age:
							<span className="badge badge-primary badge-pill">{age}</span>
						</li>
						<li className = 'list-group-item d-flex justify-content-between align-items-center'>visits:
							<span className="badge badge-primary badge-pill">{visits}</span>
						</li>
						<li className = 'list-group-item d-flex justify-content-between align-items-center'>progress:
							<span className="badge badge-primary badge-pill">{progress}</span>
						</li>
						<li className = 'list-group-item d-flex justify-content-between align-items-center'>status:
							<span className="badge badge-primary badge-pill">{status}</span>
						</li>
					</ul>
					<div className = 'buttons'>
						<button className='btn btn-outline-success' onClick={this.onToggleEdit}>Edit</button>
						<button className='btn btn-outline-danger' onClick={this.onDelete}>Delete</button>
					</div>
				</div>
			</div>
		)
    }

    renderUserPage() {
        return  this.state.isEdit ? <UserForm handleClose = { this.onToggleEdit }
                                              handleAction = { this.props.handleEditUser }
                                              { ...this.props.user }>Save</UserForm> : this.renderUser();
    }

    render() {
        return <div className = 'main'>
        <div className = 'main-wrapper'>
            { Object.keys(this.props.user).length !== 0 ? this.renderUserPage() : <Spinner /> }
        </div>
        </div>
    }

    componentWillUnmount(){
        this.props.clearUser();
    }
};

UserPage.propTypes = {
	user: PropTypes.shape({
		firstName: PropTypes.string,
		lastName: PropTypes.string,
		age: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		visits: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		progress: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
		]),
		status: PropTypes.oneOf([
			'relationship',
			'single',
			'complicated',
			'',
		]),
	}),
	clearUser: PropTypes.func,
	getUser: PropTypes.func,
	handleDelete: PropTypes.func,
	handleEditUser: PropTypes.func,
	history: PropTypes.object,
	location: PropTypes.object,
	match: PropTypes.object,
};

export default UserPage;
