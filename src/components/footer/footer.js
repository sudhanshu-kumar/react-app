import React, { Component } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {
    home: true,
    popular: false,
    add: false
  };

  handleOnClick = event => {
    const icon = event.target.innerText;
    console.log(typeof(icon))
    if (icon === "home") {
      this.setState({ home: true, popular: false, add: false });
    } else
    if (icon === "favorite") {
      this.setState({ home: false, popular: true, add: false });
    } else
    if (icon === "add") {
      this.setState({ home: false, popular: false, add: true });
    }
  };

  render() {
    return (
      <div className="foot">
        <Link to="/">
          <i className={`large material-icons ${this.state.home ? "active" : ""}`} onClick={this.handleOnClick}>
            home
          </i>
        </Link>
        <Link to="/popular">
          <i className={`material-icons ${this.state.popular ? "active" : ""}`} onClick={this.handleOnClick}>
            favorite
          </i>
        </Link>
        <Link to="/add">
          <i className={`material-icons ${this.state.add ? "active" : ""}`} onClick={this.handleOnClick}>
            add
          </i>
        </Link>
      </div>
    );
  }
}

export default Footer;

// const Footer = () => {
//   return (
//     <div className="foot">
//       <Link to="/">
//         <i className="large material-icons">home</i>
//       </Link>
//       <Link to="/popular">
//         <i className="material-icons">favorite</i>
//       </Link>
//       <Link to="/add">
//         <i className="material-icons">add</i>
//       </Link>
//     </div>
//   );
// };

// export default Footer;
