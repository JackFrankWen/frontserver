import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Login from '../views/Login';
import Register from '../views/Register';

import Home from '@/views/Home';
import Cost from '@/views/Cost';

export const childRoutes = [
  {
    path: '/home',
    component: Home,
    exactly: true,
  },
  {
    path: '/cost/create',
    component: Cost.create,
  },
  {
    path: '/cost/list',
    component: Cost.list,
  },
];

const routes = (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/" component={Layout}/>
  </Switch>
);

export default routes
