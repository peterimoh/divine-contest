import React from 'react';
import About from './containers/about/About';
import { Contact } from './containers/contact/Contact';
import Contest from './containers/contest/Contest';
import Contestant from './containers/contestant/Contestant';
import DashboardNew from './containers/dashboard/DashboardNew';
import WriteUser from './containers/Edit/WriteUser';
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
  {
    id: 7,
    path: '/contestants',
    name: 'Contestants',
    component: <Contestant />,
  },
];

const privateRouteData = [
  { id: 1, path: '/dashboard', name: 'Dashboard', component: <DashboardNew /> },
  {
    id: 2,
    path: '/edit-profile',
    name: 'Edit Profile',
    component: <WriteUser />,
  },
  { id: 3, path: '/contest', name: 'Contest', component: <Contest /> },
];

export { routeData, privateRouteData };
