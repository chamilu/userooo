import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 50px;
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
`;

export default class Header extends Component {
  render() {
    return (
      <header>
        <Div>
          <span style={{ lineHeight: '50px' }}>userooo</span>
        </Div>
      </header>
    );
  }
}
