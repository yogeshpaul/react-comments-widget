import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import StoryBoard from './components/StoryBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoryBoard />
      </div>
    );
  }
}

export default App;
