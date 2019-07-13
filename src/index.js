import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppRouter } from "./components";

const Header = () => (
  <div>
    <Link to="/home">Home</Link>
    <Link to="/about">About Us</Link>
  </div>
);

const App = () => (
  <AppRouter>
    <Header />
  </AppRouter>
);

ReactDOM.render(
  (
    <ThemeProvider theme={{ mode: "dark", layout: "compact" }}>
      <App />
    </ThemeProvider>
  ),
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);