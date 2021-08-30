import React, { useState } from 'react'
import live from '../../assets/live.png'
import src from '../../assets/src.png'
import temp from '../../assets/temp.png'
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
                    <img src={live} alt="" />
                    <img src={temp} alt="" />
                    <img src={src} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
