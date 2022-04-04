import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={(e) => this.setState({ value: e.target.value })} />
        <h1>Hello, {this.state.value}</h1>
      </React.Fragment>
    );
  }
}

export default App;
