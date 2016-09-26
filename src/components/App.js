import React from 'react';
import { Component } from 'react';
import './App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
