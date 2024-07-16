import React, { useState } from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import classes from "./Career.module.css";
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const Career = () => {
  const [visibleDetails, setVisibleDetails] = useState({});

  const toggleDetails = (position) => {
    setVisibleDetails(prevState => ({
      ...prevState,
      [position]: !prevState[position]
    }));
  }

  const jobPositions = [
    { department: 'Software Development Department', positions: ['Middle/Senior iOS developer', 'Front-end developer (React / React Native)', 'Senior Java Developer', 'Junior Flutter developer (React / React Native)'] },
    { department: 'Department of Marketing and Sales', positions: ['Copywriter', 'Front-end developer (React / React Native)'] },
    { department: 'ICT Department', positions: ['DevOps Specialist'] }
  ];

  return (
    <div className={classes.div}>
      <NavigationMenu />
      <ContentWrapper className={classes.wrapper}>
        <div className='animate__animated animate__slideInUp '>
          <h1 className={classes.heading}>Career</h1>
          <p className={classes.para}>Join the ReThing team and be part of a dynamic and innovative work culture. Discover exciting career opportunities and become a driving force behind the next wave of digital transformation.</p>
        </div>

        <h2 className={classes.heading2}>Open positions</h2>

        {jobPositions.map((department, deptIndex) => (
          <div key={deptIndex}>
            <p className={classes.soft}>{department.department}</p>
            <hr className={classes.hr} />
            {department.positions.map((position, posIndex) => (
              <div key={posIndex}>
                <h4 className={classes.h4} onClick={() => toggleDetails(position)}>
                  {position} <span className={classes.details}>Details <span className={classes.arrow}>↓</span></span>
                </h4>
                {visibleDetails[position] && (
                  <p className={classes.detailsText}>This is some detailed text about the {position} position.</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </ContentWrapper>
    </div>
  );
}

export default Career;
