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
        <section id="about">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
          </p>
          <p>
            Find me on
            <a
              class="icon"
              target="_blank"
              href="https://github.com/grephack"
            >
              <i class="fab fa-github" />
            </a>
            ,
            <a
              class="icon"
              target="_blank"
              href="https://twitter.com/fenrisl"
            >
              <i class="fab fa-twitter" />
            </a>
            ,
            <a
              class="icon"
              target="_blank"
            >
              <i class="fab fa-linkedin" />
            </a>
            ,
            <a
              class="icon"
              target="_blank"
            >
              <i class="fab fa-goodreads" />
            </a>{" "}
            and
            <a class="icon" target="_blank" href="mailto:contact@grephack.com">
              <i class="fas fa-envelope" />
            </a>
            .
          </p>
        </section>
      </div>
    );
  }
}

export default FrontPage;
