import React from 'react'
import classes from "./ContentWrapper.module.css"

const ContentWrapper = ({children, className}) => {
  return (
    <div className={`${classes.contentWrapper} ${className}`}>
      {children}
    </div>
  )
}

export default ContentWrapper
