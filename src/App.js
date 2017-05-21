import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Clock from './components/Clock';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import Header from './components/Header';
import Paper from 'material-ui/Paper';
import './App.css'; //Although imported here, Components also get this
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : null
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Public = () => <h3>Public</h3>

class App extends Component {
  render() {
    const LoginFormWithProps = (props) => {
      return (
        <LoginForm 
          fakeAuth={fakeAuth}
          {...props}
        />
      );
    }
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
            <Router>
              <div>
                <AuthButton/>
                <Route path="/" component={LoginFormWithProps}/>
                <PrivateRoute path="/protected" component={Profile}/>
              </div>
            </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
