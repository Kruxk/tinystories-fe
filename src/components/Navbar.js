import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
  paddingLeft: "1.5em",
  paddingRight: "1.5em",
  paddingTop: "0.5em",
  margin: "0 2em",
  paddingBottom: "0.5em",
  textDecoration: "none",
  color: "black",
  borderRadius: "1em",
};

export default function Navbar() {
  return (
    <div
      style={{
        margin: "0.5em",
        fontSize: "1.15em",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavLink
        exact
        activeStyle={{ background: "#E0E0E0" }}
        style={navStyle}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{ background: "#E0E0E0" }}
        style={navStyle}
        to="/profile"
      >
        Profile
      </NavLink>
      <NavLink
        activeStyle={{ background: "#E0E0E0" }}
        style={navStyle}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
