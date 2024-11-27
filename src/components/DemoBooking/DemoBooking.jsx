import React from 'react';
import { Link } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import classes from './DemoBooking.module.css';
import { useInView } from 'react-intersection-observer';

const DemoBooking = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={classes.color}>
      <ContentWrapper>
        <div
          ref={ref1}
          className={`${inView1 ? 'animate__animated animate__slideInDown' : ''} ${classes.flex}`}
        >
          <h1 className={classes.heading}>Ready to Get Started?</h1>
          <Link to="/contact">
            <button className={classes.btn}>
              Let’s turn your ideas into reality. Let’s Talk
            </button>
          </Link>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default DemoBooking;
