import ibra from "./img/ibra.jpg";
import Button from "./Button";
import React from "react";

function AboutMe() {
  return (
    <div id="About" className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 text-center">
            <img className="avatar" src={ibra} alt="profile" />
          </div>
          <div className="col-6">
            <h1 className="mb-4">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              exercitationem porro, quos sit cupiditate rerum nemo enim commodi
              perferendis dolorem? Beatae labore ut reprehenderit doloremque.
              Sapiente cumque officiis fugiat eum quaerat assumenda unde officia
              nihil veniam iure possimus animi, repellat placeat velit, quod
              corrupti impedit consectetur, laboriosam nam et quisquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              exercitationem porro, quos sit cupiditate rerum nemo enim commodi
              perferendis dolorem? Beatae labore ut reprehenderit doloremque.
              Sapiente cumque officiis fugiat eum quaerat assumenda unde officia
              nihil veniam iure possimus animi, repellat placeat velit, quod
              corrupti impedit consectetur, laboriosam nam et quisquam.
            </p>
            <div class="row">
              <div class="col">
                <Button text="Download CV" warna="primary" link="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
