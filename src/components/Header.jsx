import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Port.scss";
import $ from "jquery";
import { Component } from "react";

const Header = () => {
  const [check, change] = useState(true);
  const [col, set] = useState("black");
  const [text, seting] = useState("white");
  const [t, sett] = useState("maroon");
  const [b, rang] = useState(true);
  const [toggle, rev] = useState(false);
  window.addEventListener("scroll", (event) => {
    if (window.scrollY == "0") {
      set("black");
      seting("white");
      sett("maroon");
      rev(false);
      rang(true);
    } else {
      rev(true);
      set("maroon");
      seting("white");
      sett("white");
      rang(false);
    }
  });
  const hiding = () => {
    if (check == false) {
      change(true);

      document.getElementsByClassName("navbar-toggler-icon")[0].click();
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          top: "0px",
          borderBottom: "2px solid maroon",
        }}
        className="short"
      >
        <nav
          class="navbar navbar-expand-md  navbar-light"
          style={{ backgroundColor: `${col}` }}
        >
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <NavLink exact to="/portFolio" className="nav-link">
                <h1 style={{ color: `${text}` }} className="port ">
                  <span
                    style={{
                      fontStretch: "extra-expanded",
                      fontFamily: "sans-serif",
                    }}
                  >
                    P
                  </span>
                  ortfo<span style={{ color: `${t}` }}>lio</span>
                </h1>
              </NavLink>
            </li>
          </ul>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
            onClick={() => {
              change(!check);
            }}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item active text">
                <a
                  className="nav-link"
                  style={{ color: `${text}` }}
                  onClick={hiding}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li class="nav-item active takemargin">
                <a
                  className="nav-link"
                  style={{ color: `${text}` }}
                  onClick={hiding}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li class="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: `${text}` }}
                  onClick={hiding}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li class="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: `${text}` }}
                  onClick={hiding}
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li class="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: `${text}` }}
                  onClick={hiding}
                  href="#project"
                >
                  Projects
                </a>
              </li>
              <li class="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: `${text}` }}
                  onClick={hiding}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
