import React from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import logo from "../../assets/rething.png";
import { Link } from 'react-router-dom';
import classes from "./NavigationMenu.module.css";

const NavigationMenu = () => {
  return (
    <div className={classes.main_wrapper}>
      <ContentWrapper className={classes.wrapper}>
        <div className={classes.logo}>
       <Link to='/'>
       <img src={logo} width={60} alt="Logo"/></Link>
        </div>
        <div className={classes.link_container}>
          <Link to="/contect">About us</Link>
          <Link to="/contect">Services</Link>
          <Link to="/contect">Project</Link>
          <Link to="/career">Career</Link>
          <Link to="/contect">Meet the team</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <button className={classes.button_one}>REQUEST A DEMO</button>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default NavigationMenu;
