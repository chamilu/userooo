import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render() {
    const { selectedUser: user } = this.props;

    if (!user) {
      return <h2>Please select a user</h2>;
    }

    return (
      <div>
        <h2>user details</h2>
        <img src={user.profile_image_url} alt="" />
        <br />
        Name: {user.firstName}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(UserDetails);
