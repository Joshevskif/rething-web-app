import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import { FaLaptopCode, FaPaintBrush, FaCogs, FaChartLine } from "react-icons/fa";
import Footer from "../Footer/Footer";
import classes from "./Services.module.css";

const servicesData = [
  {
    icon: <FaLaptopCode size={80} />,
    title: "Software Development",
    description:
      "With our wide range of services, we ensure your software development needs are met with high-quality solutions.",
  },
  {
    icon: <FaPaintBrush size={80} />,
    title: "Digital Transformation",
    description:
      "Transform your business processes with state-of-the-art digital strategies tailored for success.",
  },
  {
    icon: <FaCogs size={80} />,
    title: "IT Consulting",
    description:
      "Receive expert guidance to enhance your technological capabilities and streamline operations.",
  },
  {
    icon: <FaChartLine size={80} />,
    title: "Custom Solutions",
    description:
      "Tailored solutions designed to meet your specific challenges and goals, ensuring success.",
  },
];

const Services = () => {
  return (
    <>
      <NavigationMenu />
      <div className={`${classes.container}`}>
        <div className={`text-center ${classes.header}`}>
          <h1 className={classes.title}>Services</h1>
          <p className={classes.subtitle}>
            Our digital transformation services are designed to help
            organizations navigate the complexities of the modern digital
            landscape, leveraging cutting-edge technology and strategic thinking
            to drive innovation and achieve long-term success.
          </p>
        </div>
        <div className={classes.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={classes.serviceCard}>
              <div className={classes.icon}>{service.icon}</div>
              <h2 className={classes.serviceTitle}>{service.title}</h2>
              <p className={classes.serviceDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
