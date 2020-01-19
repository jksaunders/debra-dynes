import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AboutUs, Home, Programs } from './pages';

const { rootLocation } = process.env;

const ROUTES = {
  HOME: `${rootLocation}/`,
  ABOUT: `${rootLocation}/about`,
  PROGRAMS: `${rootLocation}/programs`,
};

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const AppRouter = ({ children }) => (
  <Router>
    {children}
    <Route path={ROUTES.HOME} component={Home} exact />
    <Route path={ROUTES.ABOUT} component={AboutUs} exact />
    <Route path={ROUTES.PROGRAMS} component={Programs} exact />
  </Router>
);

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;
AppRouter.ROUTES = ROUTES;

export default AppRouter;
