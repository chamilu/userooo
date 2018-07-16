import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import { getAllUsers } from '../actions/userAction';

class UserList extends Component {
  componentDidMount() {
    this.props.handleGetAllUsers();
  }

  renderUsers() {
    const { users, handleSelectUser } = this.props;
    return users.map(user => <User key={user._id} user={user} />);
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

const mapDispatchToProps = dispatch => {
  return {
    handleGetAllUsers: user => {
      dispatch(getAllUsers());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
