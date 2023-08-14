// src/App.js

import React, { Component } from 'react';
import { Button, TextField } from '@mui/material';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  handleLogin = () => {
    // Assume loggedIn is true for now
    this.setState({ loggedIn: true });
  };

  render() {
    return (
      <div>
        {/* Render the Navbar component */}
        <Navbar />

        {/* Conditionally render the login screen or the Dashboard */}
        {this.state.loggedIn ? (
          <Dashboard />
        ) : (
          <div>
            <h2>Login</h2>
            <TextField
              label="Username"
            />
            <TextField
              label="Password"
              type="password"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleLogin}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
