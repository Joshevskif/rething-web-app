import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <NavigationMenu />
      <div className={`${classes.container}`}>
        <div className={`row flex-grow-1 ${classes.mainContent}`}>
          {/* Left Section */}
          <div className={`col-12 col-lg-6 ${classes.leftSection}`}>
            <div className={classes.text}>
              <h1 className={classes.title}>Ready to level up?</h1>
              <p className={classes.subtitle}>
                We’ll be in touch to kick things off in no time.
                <br />
                Prefer email? You can also reach us at:
                <br />
                <a
                  href="mailto:dimitar.najdenov@rething.se"
                  className={classes.emailLink}
                >
                  dimitar.najdenov@rething.se
                </a>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className={`col-12 col-lg-6 ${classes.rightSection}`}>
            {/* Formspree Integration */}
            <form
              className={classes.form}
              action="https://formspree.io/f/xvgowqbr" // Your Formspree form URL
              method="POST"
            >
              <label>
                Company Name / Your Name
                <input
                  type="text"
                  name="name" // Field name to send to Formspree
                  placeholder="Enter your company name / your name"
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone" // Field name to send to Formspree
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                Work Email
                <input
                  type="email"
                  name="email" // Field name to send to Formspree
                  placeholder="Enter your work email"
                  required
                />
              </label>
              <label>
                Anything else we should know?
                <textarea
                  name="message" // Field name to send to Formspree
                  placeholder="Type your message"
                  rows="5"
                ></textarea>
              </label>
              <button type="submit" className={classes.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
