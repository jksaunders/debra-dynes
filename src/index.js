import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@jksaunders/bonfire";

const App = () => (
  <Button>Hello!</Button>  
);

ReactDOM.render(
	<App />,
	document.getElementById("root")
);