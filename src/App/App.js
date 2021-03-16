import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Routes from '../helpers/Routes';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <Navbar/>
          <Routes/>
        </Router>
      </div>
    );
  }
}
