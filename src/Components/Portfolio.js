import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import oracleImage from "./Assests/oracleImage.jpg";
import wordPress from "./Assests/wordPress.jpg";
import lavenders from "./Assests/lavenders.png";
import nhPort from "./Assests/nhPort.png";
import quizApp from "./Assests/quizApp.png";
import bmr from "./Assests/bmr.png";

//Owl Carousel Settings
const options = {
  loop: true,
  margin: 30,
  responsiveClass: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    600: {
      items: 1
    },
    700: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};
class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1
            style={{
              color: "purple"
            }}
          >
            Portfolio
            <p className="contact-separator"></p>
          </h1>
          <OwlCarousel
            className="slider-items owl-carousel"
            {...options}
            autoplay={true}
          >
            <div class="item">
              <a href="https://youtu.be/QYLNru5kIhg" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={wordPress} />
                  </div>
                  <div>
                    <p>
                      Tourist World Website
                      <br />
                      (WordPress)
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="item">
              <a href="https://youtu.be/KagSYDK1y5U" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={oracleImage} />
                  </div>
                  <div>
                    <p>
                      Freelancing Management System <br />
                      (WordPress)
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div class="item">
              <a href="https://lavender-fields.web.app/" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={lavenders} />
                  </div>
                  <div>
                    <p>
                      Gardening Website <span>Lavender fields</span>
                      <br />
                      (HTML5, CSS3 BOOTSTRAP JAVASCRIPT)
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="item">
              <a href="https://nh-creations-7784f.web.app/" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={nhPort} />
                  </div>
                  <div>
                    <p>
                      Portfolio Website <span>NH Creations</span>
                      <br />
                      (HTML5, CSS3 BOOTSTRAP JAVASCRIPT JQUERY)
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="item">
              <a href="https://shaikhhira.github.io/ReactQuizApp/" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={quizApp} />
                  </div>
                  <div>
                    <p>
                      Quiz App
                      <br />
                      (React js)
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="item">
              <a href="https://nuts6.csb.app/" target="_blank">
                <div className="portfolio-cards">
                  <div>
                    <img src={bmr} />
                  </div>
                  <div>
                    <p>
                      BMR Calculator
                      <br />
                      (React js)
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Portfolio;
