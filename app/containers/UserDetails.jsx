import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  render() {
    return (
      <div>
        <span>user details</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(UserDetails);
