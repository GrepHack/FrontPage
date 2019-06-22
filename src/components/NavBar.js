import React, { Component } from "react";
import "../Styles/NavBar.css";

class Navbar extends React.Component {
  render() {
    return (
      <header id="header">
        <div id="title">
          <h1>GrepHack</h1>
        </div>
        <div id="nav">
          <ul>
            <li>
              <a href="/">~/home</a>
            </li>
            <li>
              <a>placeholder</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Navbar;
