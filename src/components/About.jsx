import React, { useEffect, useState } from "react";
import "./Port.scss";
import img1 from "./harsh.jpeg";
import resume from "./resume.pdf";

const About = (props) => {
  const [more, set] = useState(false);

  window.onresize = function () {
    var width = window.innerWidth;

    if (width < 550) {
      set(true);
    } else {
      set(false);
    }
  };

  useEffect(() => {
    var width = window.innerWidth;

    if (width < 550) {
      set(true);
    } else {
      set(false);
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        overflow: "hidden",
      }}
      id="about"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          marginTop: "3%",
        }}
        className="bottom container-fluid"
      >
        <div className="move container text-center">
          <h1 style={{ fontSize: "200%" }}>About me</h1>
          <span style={{ color: "red" }}>____Who i Am_____</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "4%",
            marginBottom: "5%",
            flexWrap: "wrap",
          }}
          className="container"
        >
          <div style={{ width: "300px", height: "300px" }}>
            <img
              src={img1}
              style={{ width: "100%", height: "auto" }}
              alt="img"
            />
          </div>
          <div
            style={
              more == false
                ? { textAlign: "justify", marginTop: "0%", width: "50%" }
                : { textAlign: "justify", marginTop: "0%", width: "90%" }
            }
          >
            <p style={{ fontWeight: "bold" }}>
              As a Full Stack developer, my name is Dipanshu.
            </p>
            <span>
              {" "}
              I'm pursuing a bachelor's in computer science at Chitkara
              University. I'm a CSE student currently in my third year. I'm
              learning a variety of programming languages, including C++, Java,
              Python, and Javascript. I'm also getting a good handle on C++'s
              data structures. I want to work in Mern Stack Technology, so I
              also start practicing frontend (Html, Css, React, Javascript) and
              backend languages (Node js,Mongodb). I love what I do. and
              constantly willing to pick up new skills, finish projects on
              schedule, and master new technologies.{" "}
            </span>
            <br />

            <br />

            <a href={resume} download="Resume.pdf" style={{ color: "maroon" }}>
              <button className="btn btn-outline-danger">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
