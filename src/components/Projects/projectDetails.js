import React, { useState } from 'react'
import live from '../../assets/live.png'
import src from '../../assets/src.png'
import grid from '../../assets/grid.png'
function ProjectDetails() {
    const [show, setShow] = useState(false);
    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="col-4 pcol-1">
            <img src={grid} alt="" />
            <div
                style={{ display: !show ? 'none' : '' }}

                className="project__info">
                <h1 className="project__info-text">
                    A Recreation of a
                    popular Figma template
                    featuring a landing
                    page.
                </h1>
                <div className="cta">


                    <a href="https://grid-rez.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={live} alt="" />

                    </a>


                    <a href="https://github.com/medAzizRezgui/grid" target="_blank" rel="noopener noreferrer">
                        <img src={src} alt="" />

                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
