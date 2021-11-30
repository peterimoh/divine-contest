import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'jquery'

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
