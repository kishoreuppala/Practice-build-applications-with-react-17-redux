import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Header = () => {
  const activeStyle = { color: "#FDAC53" };

  return (
    <nav>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
