import ServiceItem from "./ServiceItem";
import React from "react";

function Services() {
  return (
    <div id="Services" className="section bg-dark text-light py-5">
      <div className="container">
        <h1>Services</h1>
        <div className="row">
          <ServiceItem
            judul="Desain Web"
            warna="merah"
            deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad eum iste expedita! Cupiditate deserunt eos, hic voluptate culpa enim!
"
          />
          <ServiceItem
            judul="Fullstack Web Developer"
            warna="hijau"
            deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad eum iste expedita! Cupiditate deserunt eos, hic voluptate culpa enim!
"
          />
          <ServiceItem
            judul="PHP Laravel"
            warna="kuning"
            deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad eum iste expedita! Cupiditate deserunt eos, hic voluptate culpa enim!
"
          />
          <ServiceItem
            judul="React Js"
            warna="biru"
            deskripsi="Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad eum iste expedita! Cupiditate deserunt eos, hic voluptate culpa enim!
"
          />
        </div>
      </div>
    </div>
  );
}
export default Services;
