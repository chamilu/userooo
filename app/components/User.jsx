import React, { Component } from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
  float: left;
  border: 1px solid #c1c1c1;
  padding: 6px;
  margin: 0 20px 20px 0;
  cursor: pointer;
  background-color: #eee;
  color: #666;
  transition: 0.3s all ease-out
  &:hover {
    background-color: #ccc;
    border: 1px solid #aaa;
    color: #fff;
  }
`;

const NameDiv = styled.div`
  font-size: 12px;
`;

export default class User extends Component {
  render() {
    const { user } = this.props;

    return (
      <UserDiv>
        <NameDiv>{`${user.firstName} ${user.lastName}`}</NameDiv>
      </UserDiv>
    );
  }
}
