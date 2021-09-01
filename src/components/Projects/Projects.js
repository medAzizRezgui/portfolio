import React, { useState } from 'react'
import './Projects.scss'
import './mobileprojects.scss'
import Item from '../Scroll Reveal Item/Item'
import SectionBar from '../SectionBar/SectionBar'
import live from '../../assets/live.png'
import src from '../../assets/src.png'
import temp from '../../assets/temp.png'
import fylo from '../../assets/fylo.png'
import mobilesnow from '../../assets/mobilesnow.png'
import mobilehuddle from '../../assets/mobilehuddle.png'
import mobilefylo from '../../assets/mobilefylo.png'
import mobilegrid from '../../assets/mobilegrid.png'
import ProjectDetails from './projectDetails'
import ProjectDetails1 from './projectDetails1'
import ProjectDetails2 from './projectDetails2'
function Projects() {
    const [show, setShow] = useState(false);

    return (
        <div id='projects' className="container projects__container">
            <Item
                origin={'top'}
                duration={1000}
                delay={200}
                distance={'500px'}
                scale={1}
                easing={'ease'}
            >
                <SectionBar active4={true}></SectionBar>
            </Item>
            <div className="projects">
                <h1 className="projects__title">
                    Projects
                </h1>
                <div className="row prow">

                    <ProjectDetails />
                    <div className="col-8 pcol-2">
                        <div className="row prow2">
                            <ProjectDetails1 />
                            <ProjectDetails2 />
                        </div>
                        <div
                            onMouseEnter={() => setShow(true)}
                            onMouseLeave={() => setShow(false)}
                            className="row prow2">
                            <img src={fylo} alt="" />
                            <div
                                style={{ display: !show ? 'none' : '' }}

                                className="project__info">
                                <h1 className="project__info-text">
                                    A Recreation of a landing page template

                                </h1>
                                <div className="cta">

                                    <a href="https://fylo-rez.netlify.app" target="_blank" rel="noopener noreferrer">                                    <img src={live} alt="" />
                                    </a>

                                    <a href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd" target="_blank" rel="noopener noreferrer">                                    <img src={temp} alt="" />
                                    </a>

                                    <a href="https://github.com/medAzizRezgui/fylo" target="_blank" rel="noopener noreferrer">
                                        <img src={src} alt="" />

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile__projects">
                    <div className="row mobile__prow">
                        <div className="col-12 mobile__pcol">

                            <a href="https://snow-devil-rez.netlify.app" target='_blank'>

                                <img src={mobilesnow} alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="row mobile__prow">
                        <div className="col-12 mobile__pcol">
                            <a href="https://fylo-rez.netlify.app" target="_blank" rel="noopener noreferrer">
                                <img src={mobilefylo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="row mobile__prow">
                        <div className="col-12 mobile__pcol">

                            <a href="https://huddle-rez.netlify.app" target="_blank" rel="noopener noreferrer">
                                <img src={mobilehuddle} alt="" />


                            </a>
                        </div>
                    </div>
                    <div className="row mobile__prow">
                        <div className="col-12 mobile__pcol">
                            <a href="https://grid-rez.netlify.app" target="_blank" rel="noopener noreferrer">
                                <img src={mobilegrid} alt="" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
