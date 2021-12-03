import React from 'react';
import About from './containers/about/About';
import { Contact } from './containers/contact/Contact';
import Index from './containers/gallerry/Index';
import Home from './containers/Home/Index';
import { Login } from './containers/login/Index';
import { Register } from './containers/registration/Register';

const routeData = [
  { id: 1, path: '/', name: 'Home', component: <Home /> },
  { id: 2, path: '/login', name: 'Login', component: <Login /> },
  { id: 3, path: '/register', name: 'Register', component: <Register /> },
  { id: 4, path: '/about', name: 'About', component: <About /> },
  { id: 5, path: '/gallery', name: 'Gallery', component: <Index /> },
  { id: 6, path: '/contact', name: 'Contact', component: <Contact /> },
  
];

export { routeData };
