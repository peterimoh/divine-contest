import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import $ from 'jquery';
import { routeData } from './Route';

function App() {
  return (
    <Router>
      <Routes>
        {routeData.map((x) => {
          const { id, path, component } = x;
          return <Route key={id} path={path} element={component} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
