import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import '../../styles/User/index.css';

class User extends Component {
  onClick = () => {
    this.props.history.push(`/users/${this.props.id}`);
  };
  render() {
    const {
      id,
      firstName,
      lastName,
      age,
      visits,
      progress,
      status
    } = this.props;
    return (
      <tr className = 'user' onClick = {this.onClick}>
        <th scope="row">{id}</th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{visits}</td>
        <td>{progress}</td>
        <td>{status}</td>
      </tr>
    )
  }
}

User.propTypes = {
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
};

export default withRouter(User)
