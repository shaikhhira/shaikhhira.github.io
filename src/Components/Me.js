import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typical from "react-typical";
import myPic from "./Assests/myPic.jpg";
function Me() {
  return (
    <Router>
      <div>
        <div className="container">
          <div className="intro-section">
            <h1>I'm Hira Shaikh</h1>
            <p>
              <Typical
                loop={Infinity}
                wrapper="p"
                steps={[
                  "Web Developer",
                  2000,
                  "Graphic Designer",
                  2000,
                  "Freelancer",
                  2000,
                  "Founder at NH Creations",
                  2000
                ]}
              />
            </p>
            <p className="separator"></p>
            <a
              href="https://github.com/shaikhhira"
              target="_blank"
              className="iconBtn"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://stackoverflow.com/users/14647547/hira-shaikh"
              className="iconBtn"
              target="_blank"
            >
              <i class="fab fa-stack-overflow"></i>
            </a>
          </div>
          <div className="image-section">
            <img src={myPic} />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default Me;
