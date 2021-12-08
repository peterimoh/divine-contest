import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import $ from 'jquery';

import { privateRouteData, routeData } from './Route';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './containers/dashboard/Dashboard';

function App() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const { isAuthenticated, user, error } = login;

  return (
    <Router>
      <Routes>
        {routeData.map((x) => {
          const { id, path, component } = x;
          return <Route key={id} path={path} element={component} />;
        })}
        {privateRouteData.map((x) => {
          const { id, path, component } = x;
          return (
            <Route
              key={id}
              path={path}
              element={<PrivateRoute>{component}</PrivateRoute>}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
