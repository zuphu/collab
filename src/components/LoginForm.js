/**
 * This component contains the login form
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Clock from './Clock';
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
  /*
  Event called when login clicked
   */
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
      <div>
        <Clock />
        <br />
        <Paper className="Paper-style" zDepth={1}>
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
        </Paper>
      </div>
    )
  }
}

export default LoginForm;