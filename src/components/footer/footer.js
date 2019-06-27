import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot">
      <Link to="/">Home</Link>
      <Link to="/popular">Most Popular</Link>
      <Link to="/add">Add</Link>
    </div>
  );
};

export default Footer;
