import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hello World</p>;
}

const hi = render(<Hi />, document.getElementById("app"));

export default hi;
