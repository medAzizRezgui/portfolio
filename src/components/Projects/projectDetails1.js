import React, { useState } from 'react'
import live from '../../assets/live.png'
import src from '../../assets/src.png'
import temp from '../../assets/temp.png'
import snow from '../../assets/snow.png'
function ProjectDetails1() {
    const [show, setShow] = useState(false);
    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className="col-6 prowcol">
            <img src={snow} alt="" />
            <div
                style={{ display: !show ? 'none' : '' }}

                className="project__info">
                <h1 className="project__info-text">
                    A mobile first E-commerce website
                </h1>
                <div className="cta">
                    <a href="https://snow-devil-rez.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={live} alt="" />


                    </a>
                    <a href="https://venture-theme-snowboards.myshopify.com/" target="_blank" rel="noopener noreferrer">

                        <img src={temp} alt="" />

                    </a>

                    <a href="https://github.com/medAzizRezgui/snowdevil" target="_blank" rel="noopener noreferrer">
                        <img src={src} alt="" />

                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails1
