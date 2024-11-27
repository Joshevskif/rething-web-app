import React from "react";
import classes from "./Technologies.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import boksyMK from "../../assets/boksymklogo.png";
import boksySE from "../../assets/boksyse.png";
import illumination from "../../assets/Illumination.svg";
import eva from "../../assets/eva.png";
import mZaednica from "../../assets/mZaednica.png";
import Stabenfeldt from "../../assets/Stabenfeldt.png";
import zoion from "../../assets/zoion-logo.png";
import kore from "../../assets/kore.png";

const Technologies = () => {
  const logos = [
    { src: boksyMK, alt: "Boksy MK" },
    { src: boksySE, alt: "Boksy SE" },
    { src: illumination, alt: "Illumination" },
    { src: eva, alt: "EVA" },
    { src: mZaednica, alt: "MZaednica" },
    { src: Stabenfeldt, alt: "Stabenfeldt" },
    { src: zoion, alt: "Zoion" },
    { src: kore, alt: "Kore" },
  ];

  // Duplicate the logos to make a seamless carousel
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className={`animate__animated animate__fadeIn ${classes.container} container-fluid`}
    >
      <div className="row text-center mb-4">
        <h2 className={classes.text}>
          Our latest projects<br /> 
        </h2>
      </div>

      <div className={`row justify-content-center ${classes.marquee}`}>
        <div className={`${classes.marqueeInner} col-12`}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`col-4 col-md-3 col-lg-1 ${classes.circle}`}
            >
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
