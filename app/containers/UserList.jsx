import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import User from '../components/User';

class UserList extends Component {
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

  renderUsers() {
    const { users } = this.props;
    return users.map(user => <User key={user.id} name={user.name} />);
  }

  render() {
    return <div>{this.renderUsers()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UserList);
