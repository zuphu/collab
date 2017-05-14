import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <TextField
          hintText="User name"
        /><br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        /><br />
        <RaisedButton label="Login" primary={true}/>
      </form>
    );
  }
}

export default LoginForm;