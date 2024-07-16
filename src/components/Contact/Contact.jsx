import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import classes from "./Contact.module.css"
import NavigationMenu from '../NavigationMenu/NavigationMenu'

const Contact = () => {
  return (
    <>
    <NavigationMenu/>
    <div className={classes.color}>

        <ContentWrapper>
            <div className={classes.text}>
            <h1>Ready to level up?</h1>
            <p>We’ll be in touch to kick things off in no time.</p>
            </div>
            <div className={classes.contact_card}>

                <div className={classes.contact_information}>
                    Contact Information
                </div>
                <div className={classes.email_form}>
                    EMAIL FORM
                </div>

            </div>
        </ContentWrapper>
      
    </div>
    </>
  )
}

export default Contact
