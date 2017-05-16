import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
          <RaisedButton label="Login" primary={true}/>
        </form>
      </Paper>
    );
  }
}

export default LoginForm;