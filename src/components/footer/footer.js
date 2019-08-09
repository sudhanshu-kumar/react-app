import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot">
      <NavLink
        style={{ color: "gray" }}
        to="/"
        activeStyle={{ color: "cadetblue" }}
        exact
      >
        <i className="large material-icons">home</i>
      </NavLink>
      <NavLink
        style={{ color: "gray" }}
        to="/popular"
        activeStyle={{ color: "cadetblue" }}
        exact
      >
        <i className="material-icons">favorite</i>
      </NavLink>
      <NavLink
        style={{ color: "gray" }}
        to="/add"
        activeStyle={{ color: "cadetblue" }}
        exact
      >
        <i className="material-icons">add</i>
      </NavLink>
    </div>
  );
};

export default Footer;
