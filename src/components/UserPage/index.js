import React, { Component } from 'react';

import '../../styles/UserPage/index.css';
import Spinner from '../Spinner';

class UserPage extends Component {
    componentDidMount() {
        const id = +this.props.match.params.id;
        this.props.getUser(id);
    }
    renderUserPage(){
        const { id, firstName, lastName, age, visits, progress, status } = this.props.user;
        return  <ul>
                    <li>id: {id}</li>
                    <li>firstName: {firstName}</li>
                    <li>lastName: {lastName}</li>
                    <li>age: {age}</li>
                    <li>visits: {visits}</li>
                    <li>progress: {progress}</li>
                    <li>status: {status}</li>
                </ul>

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
}

export default UserPage;