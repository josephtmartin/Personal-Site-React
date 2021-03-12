import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from '../helpers/data/connection';

import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';

fbConnection();
export default class App extends React.Component {
  state = {
    user: null,
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <Router>
          <Navbar user={user}/>
          <Routes user={user}/>
        </Router>
      </div>
    );
  }
}
