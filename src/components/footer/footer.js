import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot">
      <Link to="/">
        <i className="large material-icons">home</i>
      </Link>
      <Link to="/popular">
        <i className="material-icons">favorite</i>
      </Link>
      <Link to="/add">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default Footer;
