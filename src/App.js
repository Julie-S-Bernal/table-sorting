import React from 'react';
import './App.css';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from  'react-router'
import Table from './Table.js'
import ErrorPage from './ErrorPage.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
      <Switch>
        <Route
        exact
        //  path will enable me to pass the params to control the sorting of the table
        path="/:sortBy/:direction"
        render={props=> <Table {...props} />}
      />
      <Route path="*" component={ErrorPage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
