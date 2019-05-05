import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import Table from './Table.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>still working?</div>
      </header>
      <Router>
        <Route
        exact
        path='/'
        render={props=> <Table {...props} />}
      />
      </Router>
    </div>
  );
}

export default App;
