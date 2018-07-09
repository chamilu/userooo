import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

export default class UserList extends Component {
  getUsers() {
    return axios.get('/api/users');
  }

  componentDidMount() {
    this.getUsers()
      .then(data => {
        console.log(data);
      })
      .catch(console.error);
  }

  render() {
    return <User />;
  }
}
