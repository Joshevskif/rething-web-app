import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Button from "../Button/Button";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import video from "../../assets/video1.json";
import classes from "./Hero.module.css";

const Hero = () => {
  const { ref: animatedRef, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ContentWrapper className={`container ${classes.hero_container}`}>
      <div className="row align-items-center">
        {/* Left Section */}
        <div
          className={`col-12 col-lg-6 text-center text-lg-start animate__animated animate__fadeInLeft ${classes.left_container}`}
        >
          <div className={classes.text_container}>
            <h1>Reimagine Your Business </h1>
            <h1>
              Operations <span className={classes.spanka}></span>
            </h1>
            <h1 className={classes.spanka}>with Us?</h1>
          </div>
          <div className={classes.button_container}>
            <Button
              className={classes.button_two}
              text={"At Rething, we don’t just build software. "}
            />
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
