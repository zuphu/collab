import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import logo from './../../public/favicon-circular.ico';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    return (
      <div>
        This is the profile view 
      </div>
    );
  }
}

export default Profile;