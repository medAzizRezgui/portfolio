import React, { useState } from 'react'
import live from '../../assets/live.png'
import src from '../../assets/src.png'
import temp from '../../assets/temp.png'
import huddle from '../../assets/huddle.png'
function ProjectDetails2() {
    const [show, setShow] = useState(false);
    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="col-6 prowcol">
            <img src={huddle} alt="" />
            <div
                style={{ display: !show ? 'none' : '' }}

                className="project__info">
                <h1 className="project__info-text">
                    A Recreation of a landing page template
                </h1>
                <div className="cta">
                    <a href="https://huddle-rez.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={live} alt="" />
                    </a>

                    <a href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2" target="_blank" rel="noopener noreferrer">
                        <img src={temp} alt="" />
                    </a>

                    <a href="https://github.com/medAzizRezgui/huddle" target="_blank" rel="noopener noreferrer">

                        <img src={src} alt="" />

                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails2
