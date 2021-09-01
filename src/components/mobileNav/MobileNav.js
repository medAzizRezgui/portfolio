import React from 'react'
import './mobilenav.scss'
import home from '../../assets/home(1).png'
import me from '../../assets/aboutme.png'
import skills from '../../assets/pencil.png'
import contact from '../../assets/email.png'
import projects from '../../assets/setting.png'
function MobileNav() {
    return (
        <div className="mobilenav__container">
            <a href="#home">
                <img src={home} alt="" />
            </a>
            <a href="#about">
                <img src={me} alt="" /></a>

            <a href="#skills">
                <img src={skills} alt="" />
            </a>
            <a href="#projects">
                <img src={projects} alt="" />

            </a>
            <a href="#contact">
                <img src={contact} alt="" />

            </a>
        </div>
    )
}

export default MobileNav
