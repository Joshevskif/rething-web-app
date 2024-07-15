import React from 'react'
import classes from "./Button.module.css";

const Button = ({className, text}) => {
  return (
    <button className={`${classes.button} ${className}`}>
      {text}
    </button>
  )
}

export default Button
