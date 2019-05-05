import React, { Component } from 'react';
import './App.css';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import Table from './Table.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Route
        exact
        //  path will enable me to pass the params to control the sorting of the table
        path="/"
        render={props=> <Table {...props} />}
      />
      </Router>
    </div>
  );
}

export default App;
