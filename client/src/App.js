import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isAuthenticate: false
    }
  }
  /* this is user auth */
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }


  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.state.userHasAuthenticated
    };
    <Routes childProps={childProps} />

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
