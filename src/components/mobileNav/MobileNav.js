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

            <div className="item">
                <a href="#home">
                    <img src={home} alt="" />
                </a>
                <p>Home</p>
            </div>
            <div className="item">

                <a href="#about">
                    <img src={me} alt="" /></a>
                <p>About</p>
            </div>

            <div className="item">
                <a href="#skills">
                    <img src={skills} alt="" />

                </a>
                <p>Skills</p>
            </div>

            <div className="item">
                <a href="#projects">
                    <img src={projects} alt="" />


                </a>
                <p>Projects</p>
            </div>
            <div className="item">

                <a href="#contact">
                    <img src={contact} alt="" />


                </a>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default MobileNav
