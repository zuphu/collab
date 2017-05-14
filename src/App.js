import React, { Component } from 'react';
import logo from './../public/favicon-circular.ico';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Clock from './components/Clock';
import LoginForm from './components/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Clock />
          <LoginForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
