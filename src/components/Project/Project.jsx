import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import classes from "./Project.module.css";

// Import Images
import boksyMK from "../../assets/boksymklogo.png";
import boksySE from "../../assets/boksyse.png";
import illumination from "../../assets/Illumination.svg";
import eva from "../../assets/eva.png";
import mZaednica from "../../assets/mZaednica.png";
import Stabenfeldt from "../../assets/Stabenfeldt.png";
import zoion from "../../assets/zoion-logo.png";
import kore from "../../assets/kore.png";

const projectsData = [
  {
    title: "Boksy Sweden – Family Reading Platform",
    description:
      "A family reading app developed from scratch, featuring a strong gamification layer to enhance engagement. The platform was launched with multi-language support, payment integration for various markets, and user growth strategies. The solution included multi-market scalability and optimization for seamless operations.",
    backgroundColor: "#f9cb2f",
    image: boksySE,
    readMoreLink: "https://www.boksy.app/swe",
  },
  {
    title: "Boksy North Macedonia – Digitalized Book Marketplace",
    description:
      "Known as a “Netflix for books,” Boksy is a mobile/tablet app that provides subscribers access to two profiles with a comprehensive library of eBooks and audiobooks. Readers collect points and rewards through their activity. The platform also enables publishers to digitalize content and monetize through modern eBook/audio distribution technologies.",
    backgroundColor: "#fff",
    textColor: "#000",
    image: boksyMK,
    readMoreLink: "https://www.boksy.app/mk",
  },
  {
    title: "Stabenfeldt – Digital Transformation",
    description:
      "A 40-year-old Scandinavian publishing house underwent complete digital transformation. The result was the creation of three mobile apps for children aged 4 to 14, incorporating powerful gamification and in-app purchases. The strategy focused on user activation through onboarding, engagement, and referral mechanics, fully adhering to modern design standards.",
    backgroundColor: "#f9cb2f",
    image: Stabenfeldt,
    readMoreLink: "https://stabenfeldt.se",
  },
  {
    title: "EVA – Delivery Process Digitalization",
    description:
      "A Swedish transport company operating across Europe resolved inefficiency caused by excessive paperwork. The solution involved creating a multi-platform experience, including a user-friendly app for drivers to navigate and communicate data directly with headquarters. This reduced paperwork to zero and streamlined operations.",
    backgroundColor: "#fff",
    textColor: "#000",
    image: eva,
    readMoreLink: "#",
  },
  {
    title: "KORE by Koros",
    description:
      "A cutting-edge digital platform is revolutionizing online coaching by providing advanced tools for creating personalized workout and diet plans. With integrated progress tracking, direct communication, and extensive resource libraries, it enhances client engagement. Weekly educational updates and strict GDPR compliance empower coaches to focus on their passion while streamlining their business.",
    backgroundColor: "#f9cb2f",
    image: kore,
    readMoreLink: "https://koros.io",
  },
  {
    title: "Illumination MK",
    description:
      "A renowned global lighting company specializing in festive and atmospheric solutions has redefined how public spaces inspire connection and community. By blending bespoke design, cutting-edge illumination, and decades of expertise, the company transforms urban environments into vibrant hubs where people feel welcome, safe, and inspired. Their tailored solutions foster engagement, loyalty, and lasting memories, redefining how spaces can thrive in a modern world.",
    backgroundColor: "#fff",
    textColor: "#000",
    image: illumination,
    readMoreLink: "https://www.mk-illumination.com/en",
  },
  {
    title: "MZaednica - Citizen-Municipality Communication Platform",
    description:
      "This interactive digital platform connects citizens and local government through a mobile and web app. It supports m-participation, allowing users to communicate directly with municipal employees, report issues, and influence local activities. The platform aims to enhance collaboration and improve municipal services through direct interaction.",
    backgroundColor: "#f9cb2f",
    image: mZaednica,
    readMoreLink: "https://mzaednica.mk",
  },
  {
    title: "Zoion – Smart App for Dog Breeders and Owners",
    description:
      "A Swedish app designed for dog breeders and owners, Zoion offers tools for pedigree analysis, health tracking, and breeding insights. With AI-driven guides, a breeder registry, and a dedicated messaging system, it empowers informed decisions and connects dog enthusiasts worldwide.",
    backgroundColor: "#fff",
    textColor: "#000",
    image: zoion,
    readMoreLink: "https://www.zoion.se",
  },
];

const Project = () => {
  return (
    <>
      <NavigationMenu />
      <div className={classes.container}>
        <header className={classes.header}>
          <h1 className={classes.title}>Projects</h1>
          <p className={classes.subtitle}>
            Our portfolio showcases innovative solutions across various
            industries that have driven measurable success for our clients.
          </p>
        </header>
        <section className={classes.projectsSection}>
          <div className="row">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex align-items-stretch"
              >
                <div
                  className={classes.projectCard}
                  style={{
                    backgroundColor: project.backgroundColor,
                    color: project.textColor || "#000",
                  }}
                >
                  <div className={classes.logoWrapper}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.contentWrapper}>
                    <h2 className={classes.projectTitle}>{project.title}</h2>
                    <p className={classes.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Project;
