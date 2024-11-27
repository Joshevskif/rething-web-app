import React from "react";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`container-fluid ${classes.banner_container}`}>
      <div className="row">
        <div className="col-12 text-center">
          <h2>Accelerate Growth, Digitalize Fast, and Stay Ahead</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
