import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import classes from "./Footer.module.css";
import logoImage from "../../assets/rething.png";
import linkedinIcon from "../../assets/linkedin.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <footer className={`container-fluid ${classes.footer}`}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Section - Logo and Social Icons */}
            <div className="col-12 col-lg-3 text-center text-lg-start mb-3 mb-lg-0">
              <img src={logoImage} alt="Logo" className={classes.logo} />
              <div className="d-flex justify-content-center justify-content-lg-start mt-2">
                <a
                  href="https://www.instagram.com/rething.mk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.iconLink}
                >
                  <img src={instagramIcon} alt="Instagram" className={classes.icon} />
                </a>
                <a
                  href="https://www.linkedin.com/company/rethingse/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.iconLink}
                >
                  <img src={linkedinIcon} alt="LinkedIn" className={classes.icon} />
                </a>
              </div>
            </div>

            {/* Center Section - Contact Information */}
            <div className={`col-12 col-lg-4 text-center mb-3 mb-lg-0 ${classes.centerContent}`}>
              <p className={classes.text}>dimitar.najdenov@rething.se</p>
              {/* Update the button to navigate to the Contact page */}
              <Link to="/contact">
                <button className={classes.contactBtn}>Contact Us</button>
              </Link>
            </div>

            {/* Map Section */}
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <iframe
                className={classes.map}
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.7410833026027!2d21.38937027663669!3d42.00845557921885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354159c8110a0a3%3A0x8f9b2e21e5ba42c!2z0JrQsNC90YHQuiDQq9GA0LDQutCwICLQotC10LHQsNC10LvRjNC90LAg0KLQvtC70L7RgtGLIg!5e0!3m2!1sen!2smk!4v1692726510754!5m2!1sen!2smk"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="text-center mt-3">
            <p className={classes.copyRight}>&copy; Copyright Rething 2024</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
