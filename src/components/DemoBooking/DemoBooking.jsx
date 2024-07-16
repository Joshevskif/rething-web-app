import React from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import classes from './DemoBooking.module.css';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const DemoBooking = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className={classes.color}>
      <ContentWrapper>
        <div ref={ref1} className={`${inView1 ? 'animate__animated animate__slideInDown' : ''} ${classes.flex}`}>
          <h1>Ready to discuss your project?</h1>
          <button className={classes.btn}>LET'S TALK</button>
        </div>      
      </ContentWrapper>
    </div>
  );
};

export default DemoBooking;
