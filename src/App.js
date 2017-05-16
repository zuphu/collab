import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Clock from './components/Clock';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Paper from 'material-ui/Paper';
import './App.css'; //Although imported here, Components also get this

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Clock />
          <br />
          <LoginForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
