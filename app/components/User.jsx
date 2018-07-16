import React, { Component } from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
  float: left;
  padding: 8px 15px;
  margin: 0 20px 20px 0;
  cursor: pointer;
  border-radius: 15px;
  background-color: #34495e;
  color: #fff;
  -webkit-transition: 0.3s all ease-out;
  transition: 0.3s all ease-out;
  &:hover {
    background-color: #95a5a6;
  }
`;

const NameDiv = styled.div`
  font-size: 12px;
`;

export default class User extends Component {
  render() {
    const { user, handleSelectUser } = this.props;

    return (
      <UserDiv onClick={() => handleSelectUser(user)}>
        <NameDiv>{`${user.firstName} ${user.lastName}`}</NameDiv>
      </UserDiv>
    );
  }
}
