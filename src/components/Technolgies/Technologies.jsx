import React from 'react';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';
import classes from './Technologies.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo4 from "../../assets/logo-slider-4.webp";

const Technologies = () => {
  return (
    <div className={`animate__animated animate__fadeIn ${classes.container}`}>
      <p className={classes.para}>TRUSTED BY HUNDREDS OF BUSINESSES</p>
      <h2 className={classes.text}>Fueling Growth for North America's <br/> Leading Finance Teams</h2>
      <div className={classes.marquee}>
        <div className={classes.marqueeInner}>
          <img src={logo4} width={600} alt="Logo 1" />
          <img src={logo4} width={600} alt="Logo 2" />
          <img src={logo4} width={600} alt="Logo 3" />
          <img src={logo4} width={600} alt="Logo 3" />
          <img src={logo4} width={600} alt="Logo 3" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
