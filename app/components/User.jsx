import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return <h2 style={{ textAlign: 'center' }}>{this.props.name}</h2>;
  }
}
