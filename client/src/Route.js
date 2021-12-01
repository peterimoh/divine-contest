import React from 'react';
import Home from './containers/Home/Index';
import { Login } from './containers/login/Index';
import { Register } from './containers/registration/Register';

const routeData = [
  { id: 1, path: '/', name: 'Home', component: <Home /> },
  { id: 2, path: '/login', name: 'Login', component: <Login /> },
  {id: 3, path: '/register', name: 'Register', component: <Register />}
];

export { routeData };
