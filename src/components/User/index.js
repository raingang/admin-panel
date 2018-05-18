import React, { Component } from 'react'

export default class User extends Component {
  render() {
    console.log(this.props);
    const {
      id,
      firstName,
      lastName,
      age,
      visits,
      progress,
      status
    } = this.props;
    return (<tr>
      <th scope="row">{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{visits}</td>
      <td>{progress}</td>
      <td>{status}</td>
    </tr>)
  }
}

