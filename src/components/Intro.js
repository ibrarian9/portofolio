import Button from "./Button";
import ibra from "./img/ibra.jpg";
import React from "react";
import Typed from "react-typed";

function Intro() {
  return (
    <div id="Intro">
      <div className="section intro text-light">
        <div className="container text-center">
          <img className="avatar mb-3" src={ibra} alt="profile" />
          <h2>Ibra Sahrian Alsa</h2>
          <p>
            <Typed
              strings={[
                "Front End Developer",
                "Back End Developer",
                "Fullstack Developer",
              ]}
              typeSpeed={40}
              backSpeed={60}
              loop
            ></Typed>
          </p>

          <a
            className="social-media"
            href="https://www.instagram.com/ibra_rian/"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a className="social-media" href="https://github.com/ibrarian9">
            <i class="bi bi-github"></i>
          </a>
          <div class="row">
            <div class="col">
              <Button text="Hire Me" warna="primary" link="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
