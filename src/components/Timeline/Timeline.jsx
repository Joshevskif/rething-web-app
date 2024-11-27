import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import classes from "./Timeline.module.css";

// Import your images
import discoveryImage from "../../assets/discovery.png";
import analysisImage from "../../assets/analysisImage.png";
import designImage from "../../assets/designImage.png";
import developmentImage from "../../assets/developmentImage.png";
import deploymentImage from "../../assets/deploymentImage.png";
import scalingImage from "../../assets/scalingImage.png";

const Timeline = () => {
  const timelineEvents = [
    {
      title: "Discovery & Research",
      description:
        "Understanding your needs is our priority. We dive deep into your challenges, analyze your industry, study competitors, and explore market trends. Leveraging our experience, expertise, and the latest technologies, we craft a tailored solution designed to address your pain points and maximize your potential.",
      image: discoveryImage,
    },
    {
      title: "Requirement Analysis",
      description:
        "We collaborate with you to define clear, actionable requirements. Through detailed workshops and discussions, we ensure every aspect of your vision is captured and aligned with your business goals.",
      image: analysisImage,
    },
    {
      title: "Solution Design",
      description:
        "With insights from the discovery phase, we design an innovative solution that balances functionality, aesthetics, and cutting-edge technology. Every decision is backed by data, trends, and best practices, ensuring the solution is future-proof and scalable.",
      image: designImage,
    },
    {
      title: "Development & Testing",
      description:
        "Our team of experts brings the design to life, building a robust and high-performing solution. We rigorously test every feature and function to ensure it meets the highest quality standards before it’s ready for launch.",
      image: developmentImage,
    },
    {
      title: "Deployment & Launch",
      description:
        "We seamlessly deploy your solution, ensuring minimal disruption to your operations. From initial setup to final handover, we prioritize a smooth and successful launch, making sure you’re ready to impress from day one.",
      image: deploymentImage,
    },
    {
      title: "Growth & Scaling",
      description:
        "Once live, we stay by your side. Whether it’s scaling your solution, optimizing its performance, or expanding its features, we help your business adapt and thrive as it grows.",
      image: scalingImage,
    },
  ];

  return (
    <ContentWrapper>
      <div className={classes.timelineContainer}>
        <div className={classes.verticalLine}></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`${classes.timelineRow} ${
              index % 2 === 0 ? classes.leftRow : classes.rightRow
            }`}
          >
            {/* Image */}
            <div className={classes.imageContainer}>
              <img
                src={event.image}
                alt={event.title}
                className={classes.image}
              />
            </div>

            {/* Card */}
            <div className={classes.cardContainer}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Timeline;
