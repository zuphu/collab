import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class LoginForm extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    this.fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    })
  }

  constructor(props) {
    super(props);
    this.handleAuth = props.handleAuth;
    this.fakeAuth = props.fakeAuth;
  }
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={'/protected'}/>
      )
    }
    
    return (
      <form>
        <TextField
          floatingLabelText="User Name"
          hintText="User Name"
        /><br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        /><br />
        <RaisedButton
          label="Login"
          primary={true}
          onClick={this.login}
          />
      </form>
    )
  }
}

export default LoginForm;