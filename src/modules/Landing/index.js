import React from "react";
import Home from "../../components/Home";
import About from "../../components/About";
import Services from "../../components/Services";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import Project from "../../components/Teams";

const Landing = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </>
  );
};

export default Landing;
