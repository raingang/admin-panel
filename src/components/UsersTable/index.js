import React, { Component } from 'react';
import User from '../User';

export default class UserTable extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render(){
    if (this.props.users.length === 0) {
      return (<div>Don`t have users</div>);
    }
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Visits</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
            {this.props.users.map((item) => <User id = {item.id}
                                                  firstName = {item.firstName}
                                                  lastName = {item.lastName}
                                                  age = {item.age}
                                                  visits = {item.visits}
                                                  progress = {item.progress}
                                                  status = {item.status}/>)}
            </tbody>
        </table>
      </div>
    );
  }
}
