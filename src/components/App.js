import React from 'react';
import { Component } from 'react';
import './App.css';

import BookList from '../containers/BookList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BookList/>
      </div>
    );
  }
}

export default App;
