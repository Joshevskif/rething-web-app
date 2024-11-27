import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import logo from "../../assets/rething.png";
import { Link } from "react-router-dom";
import classes from "./NavigationMenu.module.css";

const NavigationMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={classes.main_wrapper}>
      <ContentWrapper className={classes.wrapper}>
        {/* Logo */}
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation - Centered Links */}
        <div className={`${classes.link_container} ${classes.desktop}`}>
          <Link to="/about-us">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/project">Projects</Link>
          <Link to="/career">Career</Link>
        </div>

        {/* Contact Button on Right */}
        <div className={`${classes.desktop}`}>
          <Link className={classes.link} to="/contact">
            <button className={classes.button_one}>Contact</button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className={classes.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className={classes.mobileMenu}>
            <Link to="/about-us" onClick={toggleMenu}>
              About us
            </Link>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/project" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/career" onClick={toggleMenu}>
              Career
            </Link>
            <Link
              className={classes.link}
              to="/contact"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default NavigationMenu;
