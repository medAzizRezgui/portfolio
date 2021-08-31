import React from 'react'
import './contact.scss'
import SectionBar from '../SectionBar/SectionBar'
import Item from '../Scroll Reveal Item/Item'
import hey from '../../assets/personnage.png'


function Contact() {
    return (
        <>
            <div id='contact' className="container contact__container">

                <SectionBar active5={true}></SectionBar>

                <div className="contact__text">
                    <h2 className="contact__title">
                        Get In Touch
                    </h2>
                    <p className="contact__desc">
                        Email me, or send me a message, whatever suits you!
                        I'll happily reply as soon as possible, so we can discuss our new friendship !
                    </p>

                    <a href="mailto:azizrezgui4@gmail.com">
                        <button className="contact__button">
                            Let's Go
                        </button>
                    </a>

                </div>


            </div>
            <p className="footer">Designed & Built by rezgui aziz</p>
        </>
    )
}

export default Contact
