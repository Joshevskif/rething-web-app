import React from "react";
import { useInView } from "react-intersection-observer";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import classes from "./Roadmap.module.css";
import analythics from "../../assets/rething_analythics.png";
import "animate.css";

const Roadmap = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`${classes.color}`}>
      <ContentWrapper>
        <div className="container text-center">
          <h1 className={classes.text}>Roadmap to Digital Transformation</h1>
          <p className={classes.para}>
            Digital transformation is a complex and ongoing process. Let us
            guide you through it! <br />
            These are our well-established steps that guarantee you a smooth
            path to <br />
            your digital transformation.
          </p>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Left Section */}
          <div className="col-12 col-lg-6">
            <div
              ref={ref1}
              className={`${
                inView1
                  ? "animate__animated animate__fadeInLeft animate__delay-0s"
                  : ""
              }`}
            >
              <h2 className={classes.heading}>
                1. Lightning-Fast Digitalization
              </h2>
              <h3 className={classes.subheading}>
                We transform your business processes with cutting-edge
                technology in record time, ensuring you’re always ahead of the
                competition.
              </h3>
            </div>
            <div
              ref={ref2}
              className={`${
                inView2
                  ? "animate__animated animate__fadeInLeft animate__delay-0.5s"
                  : ""
              }`}
            >
              <h2 className={classes.heading}>
                2. AI-Powered Operational Excellence
              </h2>
              <h3 className={classes.subheading}>
                Our AI solutions streamline operations, improve decision-making,
                and unlock new levels of efficiency across your organization.
              </h3>
            </div>
            <div
              ref={ref3}
              className={`${
                inView3
                  ? "animate__animated animate__fadeInLeft animate__delay-0.9s"
                  : ""
              }`}
            >
              <h2 className={classes.heading}>3. Team Augmentation Made Easy</h2>
              <h3 className={classes.subheading}>
                Struggling to find the right talent? Our experts integrate
                seamlessly with your teams, bringing specialized skills and
                innovative ideas to the table.
              </h3>
            </div>
          </div>

          {/* Right Section */}
          <div
            className={`col-12 col-lg-6 ${
              inView1
                ? "animate__animated animate__fadeInRight animate__delay-1.3s"
                : ""
            }`}
          >
            <img src={analythics} alt="Analytics" className="img-fluid mt-4" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Roadmap;
