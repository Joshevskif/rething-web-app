import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import video from "../../assets/video1.json";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <ContentWrapper className={`container ${classes.hero_container}`}>
      <div className="row align-items-center">
        {/* Left Section */}
        <div
          className={`col-12 col-lg-6 text-center text-lg-start animate__animated animate__fadeInLeft ${classes.left_container}`}
        >
          <div className={classes.text_container}>
            <h1>Rething - Building custom software</h1>
            <h1>
              and delivering scalable <span className={classes.spanka}></span>
            </h1>
            <h1 className={classes.spanka}>solutions?</h1>
          </div>
          <div className={classes.button_container}>
            <Link to="/contact">
              <button className={classes.contactBtn}>At Rething, we don’t just build software.</button>
            </Link>
          </div>
          <p className={classes.para}>
            We build solutions that augment your teams, digitize your business
            processes, and bring your organization into the future. Whether you
            need specialized talent or advanced AI-driven tools, we deliver
            results that matter—fast.
          </p>
        </div>

        {/* Right Section */}
        <div
          className={`col-12 col-lg-6 animate__animated animate__fadeInRight text-center ${classes.right_container}`}
        >
          <Lottie animationData={video} className="w-100" />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Hero;
