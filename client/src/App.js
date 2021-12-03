import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import $ from 'jquery';

import { routeData } from './Route';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

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
