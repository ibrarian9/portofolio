import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a className="navbar-brand" href="#Intro">
            My Portofolio
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Intro"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#About">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#Services">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a className="nav-link" href="#RecentWork">
                  Recent Work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
