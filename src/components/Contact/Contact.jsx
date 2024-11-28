import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Footer from "../Footer/Footer";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <NavigationMenu />
      <div className={classes.container}>
        <div className={`row ${classes.mainContent}`}>
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
            <form className={classes.form}>
              <label>
                Company Name / Your Name
                <input
                  type="text"
                  placeholder="Enter your company name / your name"
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                Work Email
                <input
                  type="email"
                  placeholder="Enter your work email"
                  required
                />
              </label>
              <label>
                Anything else we should know?
                <textarea
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
