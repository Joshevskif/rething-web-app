import React from 'react';
import { useInView } from 'react-intersection-observer';
import classes from './Roadmap.module.css';
import analythics from '../../assets/rething_analythics.png';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import 'animate.css';

const Roadmap = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={classes.color}>
    <ContentWrapper className={classes.main_wrapper}>
      <div className={classes.container}>
        <h1 className={classes.text}>Roadmap to digital transformation</h1>
        <p className={classes.para}>Digital transformation is a complex and ongoing process let us guide you through it! <br/>
        These are our well-established steps  that guarantee you a smooth way to <br/>
        your digital transformation.  </p>
      </div>
      <div className={classes.flex_container}>
        <div className={classes.left_container}>
          <div
            ref={ref1}
            className={`${
              inView1 ? 'animate__animated animate__fadeInLeft animate__delay-0s' : ''
            }`}
          >
            <h2>Research</h2>
            <h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h3>
          </div>
          <div
            ref={ref2}
            className={`${
              inView2 ? 'animate__animated animate__fadeInLeft animate__delay-0.5s' : ''
            }`}
          >
            <h2>Design</h2>
            <h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h3>
          </div>
          {/* <div
            ref={ref2}
            className={`${
              inView2 ? 'animate__animated animate__fadeInLeft animate__delay-0.5s' : ''
            }`}
          >
            <h2>Design</h2>
            <h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h3>
          </div> */}
          <div
            ref={ref3}
            className={`${
              inView3 ? 'animate__animated animate__fadeInLeft animate__delay-0.9s' : ''
            }`}
          >
            <h2>Development</h2>
            <h3>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h3>
          </div>
        </div>
        <div
            ref={ref1}
            className={`${
              inView1 ? 'animate__animated animate__fadeInRight animate__delay-1.3s' : ''
            } ${classes.right_container}`}
          >
          <img src={analythics} alt="Analytics" />
        </div>
      </div>
    </ContentWrapper>
    </div>
  );
};

export default Roadmap;
