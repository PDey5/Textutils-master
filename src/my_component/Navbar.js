import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <span className="logo ms-1"></span>
        <a className="navbar-brand p-0" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`text-${props.mode=== 'light'? 'black': 'white'} text-decoration-none mx-3`} aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className={`text-${props.mode=== 'light'? 'black': 'white'} text-decoration-none`} href="/about">
                About
              </a>
            </li> */}
          </ul>

          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Type here"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="button"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {`Enable ${
              props.mode === "light" ? "Dark" : "Light"
            } Mode`}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = { title: PropTypes.string.isRequired };