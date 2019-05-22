import React, { Component } from "react";
// import "../styles/FrontPage.css";
import NavBar from "../components/NavBar.js";



class FrontPage extends Component {
  render() {
    return (
      <div className="FrontPage">
        <div className="Nav">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default FrontPage;
