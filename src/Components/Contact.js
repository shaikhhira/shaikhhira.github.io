import React from "react";
import "./Stylesheet.css";

function Contact() {
  return (
    <div>
      <div className="container contact">
        <h1
          style={{
            color: "purple"
          }}
        >
          Contact
          <p className="contact-separator"></p>
        </h1>

        <div className="contact-section">
          <div className="cards">
            <i class="fas fa-mobile-alt"></i>
            <h3>Phone</h3>
            <p>(+92) 3313346849</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="cards">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>shaikhhira393@gmail.com</p>
          </div>
        </div>
        <div className="contact-section">
          <div className="cards">
            <i class="fas fa-link"></i>
            <h3>Social Links</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/hira.shaikh.522066/"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hirashaikh393"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/hirashaikh393/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
