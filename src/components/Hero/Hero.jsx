import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import classes from "./Hero.module.css"
import Button from '../Button/Button'
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import video from "../../assets/video1.json"


const Hero = () => {
    const { ref: animatedRef, inView: isInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
  return (
    <ContentWrapper className={classes.hero_container}>
      <div className={`animate__animated animate__fadeInLeft ${classes.left_container}`}>
        <div className={classes.text_container}>
        <h1>We deliver solutions</h1>
        <h1>Wanna <span className={classes.spanka}>know</span></h1>
        <h1 className={classes.spanka}>How?</h1>
        </div>

            <p className={classes.para}>Drive growth, innovation, and every major decision your business makes. Break free  from the limits of spreadsheets, and static budgets. Step into the limelight with the insights, influence, and recognition you deserve.

</p>
                <div className={classes.button_container}>
                <Button className={classes.button_one} text={'YES'}></Button>
                <Button className={classes.button_two} text={'No, say something funny'}></Button>
                </div>
        </div>
        <div className={`animate__animated animate__fadeInRight ${classes.right_container}`}>
        <Lottie animationData={video} />
        </div>

        
    </ContentWrapper>
  )
}

export default Hero
