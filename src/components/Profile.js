/**
 * This component contains the view the user sees when logged in
 */
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import _ from 'lodash';
import logo from './../../public/favicon-circular.ico';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getMoviesFromApiAsync();
  }
  /**
   * Initialize states
   */
  state = {
    movies: null
  }

  /**
   * Example API call to fetch movies from FB server
   */
  getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ movies: responseJson.movies });
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  /**
   * @param  key of removed item
   * @return {[type]}
   */
  handleRequestDelete (i) {
    var removedTitle = this.state.movies[i].title;
    var remainingMovies = _.remove(this.state.movies, function(n) {
      return n.title !== removedTitle;
    });
    this.setState({movies: remainingMovies});
  }
  render() {
    var fetchedMovies = 'No movies';
    /*
     If movies are fetched from server, load them
     */
    if(this.state.movies) {
      fetchedMovies = this.state.movies.map((item, i) => {
        return (
          <Chip key={i} onRequestDelete={() => this.handleRequestDelete(i)}>
            {item.title}
          </Chip>
        )
      });
    }
    return (
      <div className="row">

        <Paper className="col-sm-9">
          <p>
            Here is a list of fetched items:
          </p>
          {fetchedMovies}
          
        </Paper>
        <Paper className="col-sm-3">
          <Avatar
            src={logo}
            size={50}
          />
          <p>
          Welcome sample user. This is a view of your account information.
          </p>
        </Paper>

      </div>
    );
  }
}

export default Profile;