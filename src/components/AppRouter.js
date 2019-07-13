import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AboutUs, Home } from "./pages";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {
  children: null
};

const AppRouter = ({ children }) => (
  <Router>
    {children}
    <Route path="/home/" component={Home} />
    <Route path="/about/" component={AboutUs} />
  </Router>
);


AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;

export default AppRouter;