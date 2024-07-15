import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import classes from "./Services.module.css"
import { FaLaptopCode } from 'react-icons/fa';
import sd from "../../assets/software_development.png"

const Services = () => {
  return (
    <div className={classes.color}>
        <ContentWrapper>
        <div className={classes.container}>
        <h1 className={classes.text}>Services</h1>
        <p className={classes.para}>Our digital transformation services are designed to help organizations navigate the complexities of the modern digital landscape, <br/> leveraging cutting-edge technology and strategic thinking to drive innovation and achieve long-term success.
        your digital transformation.  </p>
      </div>

      <div className={classes.flex}>
        <div className={classes.flex1}>
            <FaLaptopCode color='white' size={100}/>
            <h2 className={classes.small}>Software development</h2>
            <p className={classes.para1}>With our wide range of , With our wide range of  , With our wide range ofdsa dnk  dsa a sda  </p>
        </div>
        <div className={classes.flex1}>
            <FaLaptopCode color='white' size={100}/>
            <h2 className={classes.small}>Software development</h2>
            <p className={classes.para1}>With our wide range of , With our wide range of  , With our wide range ofdsa dnk  dsa a sda  </p>
        </div>
        <div className={classes.flex1}>
            <FaLaptopCode color='white' size={100}/>
            <h2 className={classes.small}>Software development</h2>
            <p className={classes.para1}>With our wide range of , With our wide range of  , With our wide range ofdsa dnk  dsa a sda  </p>
        </div>
        <div className={classes.flex1}>
            <FaLaptopCode color='white' size={100}/>
            <h2 className={classes.small}>Software development</h2>
            <p className={classes.para1}>With our wide range of , With our wide range of  , With our wide range ofdsa dnk  dsa a sda  </p>
        </div>
      </div>

        </ContentWrapper>
      
    </div>
  )
}

export default Services
