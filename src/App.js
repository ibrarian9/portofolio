import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import RecentWork from "./components/RecentWork";
import Services from "./components/Services";
import "../src/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Services />
      <RecentWork />
    </div>
  );
}

export default App;
