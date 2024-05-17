import React from "react";
import { render } from "react-dom";

function Hi() {
  // In browser->Inspect->Debugger->Browsers pause execution when they hit the debugger
  debugger;
  return <p>Hello World</p>;
}

const hi = render(<Hi />, document.getElementById("app"));

export default hi;
