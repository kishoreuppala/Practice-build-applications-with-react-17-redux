import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";

// function Hi() {
//   // In browser->Inspect->Debugger->Browsers pause execution when they hit the debugger
//   // debugger;
//   return <p>Hello World</p>;
// }

// const hi = render(<Hi />, document.getElementById("app"));
// export default hi;

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
