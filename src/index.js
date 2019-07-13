import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const Home = () => (
  <h1>Home!</h1>
);

const AboutUs = () => (
  <h1>About us!</h1>
);

const AppRouter = ({ children }) => (
  <Router>
    {children}
    <Route path="/home/" component={Home} />
    <Route path="/about/" component={AboutUs} />
  </Router>
);
AppRouter.propTypes = {
  children: PropTypes.node
};
AppRouter.defaultProps = {
  children: null
};

const Header = () => (
  <div>
    <Link to="/home">Home</Link>
    <Link to="/about">About Us</Link>
  </div>
);

const App = () => (
  <div>
    <Header />
  </div>
);

ReactDOM.render(
  (
    <ThemeProvider theme={{ mode: "dark", layout: "compact" }}>
      <AppRouter>
        <App />
      </AppRouter>
    </ThemeProvider>
  ),
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);