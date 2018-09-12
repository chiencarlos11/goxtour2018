import React, { Component } from "react";
import logo from "../static/goX.png";
import menuLine from "../static/menu-line.png";
import "../stylesheets/navigation.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  setDisplay(display) {
    this.props.setDisplay(display);
  }

  handleLogoClicked() {
    window.location.reload();
  }

  render() {
    return (
      <div className="height_full navigation">
        <header>
          <div className="logo">
            <img
              className="headerImage"
              src={logo}
              alt=""
              onClick={this.handleLogoClicked}
            />
          </div>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <nav>
            <ul>
              <li>
                <a onClick={this.setDisplay.bind(this, "Executives")}>
                  Tour Members
                </a>
              </li>
              <li>
                <a onClick={this.setDisplay.bind(this, "Stores")}>Tour Stops</a>
              </li>
              <li>
                <a onClick={this.setDisplay.bind(this, "GALLERY")}>Gallery</a>
              </li>
              <li>
                <a>STATS</a>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span />
          </label>
          <div className="separator_row" />
        </header>
      </div>
    );
  }
}
