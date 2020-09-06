import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {

  openNav = () => {
    document.getElementById("myNav").style.height = "100%";
  };

  closeNav = () => {
    document.getElementById("myNav").style.height = "0%";
  };

  render() {
    return (
      <React.Fragment>
        <div className="body-container">
          <div className="header-container">
            <div></div>
            <NavLink to="/" className="header-img-container">
              <div className="profile">
                <div className="head"></div>
                <div className="inner"></div>
              </div>
            </NavLink>

            <div className="fullscreen">
              <nav className="header-nav-container">
                <NavLink
                  to="/"
                  exact
                  className="main-nav"
                  activeClassName="main-nav-active"
                >
                  Content
                </NavLink>
                <NavLink
                  to="/port"
                  exact
                  className="main-nav"
                  activeClassName="main-nav-active"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to="/about"
                  exact
                  className="main-nav"
                  activeClassName="main-nav-active"
                >
                  About
                </NavLink>
              </nav>
            </div>

            <div id="myNav" className="overlay">
              <a
                href="javascript:void(0)"
                class="closebtn"
                onClick={this.closeNav}
              >
                &times;
              </a>
              <nav className="overlay-nav-container">
                <NavLink
                  to="/"
                  exact
                  onClick={this.closeNav}
                >
                  Content
                </NavLink>
                <NavLink
                  to="/port"
                  exact
                  onClick={this.closeNav}
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to="/about"
                  exact
                  onClick={this.closeNav}
                >
                  About
                </NavLink>
              </nav>
            </div>
            
            <span className="hamburger" onClick={this.openNav}>&#9776;</span>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;
