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
    const style = {
      textAlign: 'center',
      display: 'inline-block',
      padding: '50px 50px 50px 50px'
    };
    return (
      <Paper style={style} zDepth={1}>
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
      </Paper>
    );
  }
}

export default LoginForm;