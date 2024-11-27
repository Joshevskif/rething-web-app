import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import classes from "./AboutUs.module.css";
import ourTeam from "../../assets/ourTeam.png"; // Replace with your actual image path
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <NavigationMenu />
      <div className="main-content">
        <div className={`container-fluid ${classes.aboutContainer}`}>
          <div className="row">
            {/* Left Section */}
            <div
              className={`col-12 col-lg-6 ${classes.leftSection} d-flex flex-column justify-content-center`}
            >
              <h1 className={classes.title}>About Us</h1>
              <p className={classes.paragraph}>
                At Rething, we are a team of professionals with over 8 years of
                experience in turning ideas into impactful realities.
                <br />
                Specializing in design, development, automation, digitalization,
                marketing, and product growth, we’ve built a reputation for
                delivering end-to-end solutions tailored to each client’s unique
                needs.
                <br />
                Our journey began with a shared vision: to help businesses
                harness the power of technology and innovation to solve
                real-world challenges.
                <br />
                Over the years, we’ve grown our skills, stayed ahead of industry
                trends, and embraced the latest advancements to ensure our
                clients not only succeed but thrive in a competitive landscape.
              </p>
            </div>

            {/* Right Section */}
            <div
              className={`col-12 col-lg-6 ${classes.rightSection} d-flex flex-column justify-content-center align-items-center`}
            >
              <div className={classes.mission}>
                <h2 className={classes.missionTitle}>Our Promise</h2>
                <p className={classes.missionParagraph}>
                  We deliver growth, innovation, and solutions that make every
                  decision smarter and every process more efficient. Break free
                  from outdated systems and static workflows. With our
                  expertise, you gain the insights, influence, and recognition
                  your business deserves.
                </p>
                <div className={classes.imageWrapper}>
                  <img
                    src={ourTeam}
                    alt="Our Mission"
                    className={`img-fluid ${classes.missionImage}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className={`container-fluid ${classes.whyChooseUsSection}`}>
          <ContentWrapper>
            <h2 className={classes.whyTitle}>Why choose us?</h2>
            <p className={classes.whyDescription}>
              Whether you’re starting fresh, looking to scale, or need help
              modernizing your business, we’re here to guide you every step of
              the way. Let’s build something amazing together.
            </p>
            <div className="row justify-content-center">
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className={`${classes.whyCard} ${classes.yellowCard}`}>
                  <h3>Seamless Collaboration</h3>
                  <p>
                    Having worked together for nearly a decade, our team
                    operates as a cohesive unit, bringing efficiency and synergy
                    to every project.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className={`${classes.whyCard} ${classes.whiteCard}`}>
                  <h3>Future-Ready Solutions</h3>
                  <p>
                    We leverage cutting-edge technology and best practices to
                    create solutions that are scalable, adaptable, and built for
                    tomorrow.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className={`${classes.whyCard} ${classes.purpleCard}`}>
                  <h3>Client-Centric Approach</h3>
                  <p>
                    Your success is our success. We prioritize open
                    communication, transparency, and results-driven strategies
                    to deliver beyond expectations.
                  </p>
                </div>
              </div>
            </div>
          </ContentWrapper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
