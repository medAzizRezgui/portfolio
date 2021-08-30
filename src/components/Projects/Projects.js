import React, { useState } from 'react'
import './Projects.scss'
import Item from '../Scroll Reveal Item/Item'
import SectionBar from '../SectionBar/SectionBar'
import live from '../../assets/live.png'
import src from '../../assets/src.png'
import temp from '../../assets/temp.png'
import fylo from '../../assets/fylo.png'
import ProjectDetails from './projectDetails'
import ProjectDetails1 from './projectDetails1'
import ProjectDetails2 from './projectDetails2'
function Projects() {
    const [show, setShow] = useState(false);

    return (
        <div className="container projects__container">
            <Item
                origin={'top'}
                duration={1000}
                delay={3600}
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
                                    <img src={live} alt="" />
                                    <img src={temp} alt="" />
                                    <img src={src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
