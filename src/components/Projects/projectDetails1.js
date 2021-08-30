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
                    A Recreation of shopify E-commerce template
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

export default ProjectDetails1
