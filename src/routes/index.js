import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Login from '../components/login/login.js';
import Register from '../components/register/register.jsx';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>;

Routes.propTypes = {
  history: PropTypes.any,
};

export default Routes;
