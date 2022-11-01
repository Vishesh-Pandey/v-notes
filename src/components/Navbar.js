import React from "react";
import { Link, useLocation } from "react-router-dom";
import brand from "./favicon_ico.png";

function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary bg-opacity-25">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={brand} width="40px" alt="" />
          </a>
          <a className="navbar-brand" href="/">
            v Notes
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/v-notes"
                  className={`${
                    location.pathname === "/v-notes"
                      ? "bg-warning rounded"
                      : location.pathname === "/account"
                      ? "disabled"
                      : ""
                  } nav-link`}
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signup"
                  className={`${
                    location.pathname === "/signup"
                      ? "bg-warning rounded"
                      : location.pathname === "/account"
                      ? "disabled"
                      : ""
                  } nav-link`}
                  aria-current="page"
                >
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  target="_blank"
                  rel="noreferrer"
                  href="https://vishesh-pandey.github.io/v-images/"
                >
                  vImages
                </a>
              </li>
            </ul>
            <div className="nav-item">
              <Link
                to="/v-notes"
                className={`${
                  location.pathname === "/account"
                    ? "active btn btn-warning"
                    : "d-none"
                } nav-link`}
                aria-current="page"
              >
                <button className="btn btn-warning">Sign Out</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
