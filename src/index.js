import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Button } from "@jksaunders/bonfire";

const App = () => (
  <Button variant={Button.CONSTANTS.VARIANT.PRIMARY}>Hello!</Button>
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