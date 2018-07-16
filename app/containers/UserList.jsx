import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import { getAllUsers, selectUser } from '../actions/userAction';

class UserList extends Component {
  componentDidMount() {
    this.props.handleGetAllUsers();
  }

  renderUsers() {
    const { users, handleSelectUser } = this.props;
    return users.map(user => (
      <User key={user._id} user={user} handleSelectUser={handleSelectUser} />
    ));
  }

  render() {
    return <div style={{ overflow: 'hidden' }}>{this.renderUsers()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetAllUsers: () => {
      dispatch(getAllUsers());
    },
    handleSelectUser: user => {
      dispatch(selectUser(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
