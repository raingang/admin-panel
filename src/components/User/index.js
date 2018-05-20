import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

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
    return (<tr className = 'user' onClick = {this.onClick}>
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

export default withRouter(User)
