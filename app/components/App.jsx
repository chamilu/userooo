import React, { Component } from 'react';
import styled from 'styled-components';
import UserList from '../containers/UserList';
import UserDetails from '../containers/UserDetails';

import Header from './Header';

const ContentWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <ContentWrapper>
          <UserList />
          <UserDetails />
        </ContentWrapper>
      </div>
    );
  }
}
