import React, { Component } from 'react';
import UserList from '../containers/UserList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Userooo</h1>

        <div style={{ marginTop: 30 }}>
          <UserList />
        </div>
      </div>
    );
  }
}
