import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FrontPage from './containers/FrontPage.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={FrontPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
