import React from 'react';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import classes from './MeetTheTeam.module.css';

const MeetTheTeam = () => {
  return (
    <>
      <NavigationMenu />
      <div className={classes.main}>
        <h1 className={classes.title}>Meet The Team</h1>
        <p className={classes.description}>
          Get to know the talented individuals behind our success. Our team is dedicated to delivering exceptional results and fostering innovation.
        </p>
      </div>
    </>
  );
};

export default MeetTheTeam;
