import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../store/user/selectors";
import { Button } from "react-bootstrap";
import { logOut } from "../store/user/actions";

const navStyle = {
  paddingLeft: "1.5em",
  paddingRight: "1.5em",
  paddingTop: "0.5em",
  margin: "0 2em",
  paddingBottom: "0.5em",
  textDecoration: "none",
  color: "black",
  borderRadius: "1em",
  fontFamily: "Roboto",
  fontWeight: "500",
};

export default function Navbar() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

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
      {token !== null && (
        <NavLink
          activeStyle={{ background: "#E0E0E0" }}
          style={navStyle}
          to="/profile"
        >
          Profile
        </NavLink>
      )}
      {token === null ? (
        <NavLink
          activeStyle={{ background: "#E0E0E0" }}
          style={navStyle}
          to="/login"
        >
          Login/Signup
        </NavLink>
      ) : (
        <Button
          style={{ ...navStyle, backgroundColor: "white", border: "none" }}
          onClick={(e) => dispatch(logOut())}
        >
          Logout
        </Button>
      )}
    </div>
  );
}
