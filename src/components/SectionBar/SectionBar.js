import React from 'react'
import './SectionBar.scss'
import SectionBarItem from './SectionBarItem/SectionBarItem'
function SectionBar(props) {
    return (
        <div className="sectionBar">
            <div className="items__container">
                <a href="#home">
                    <SectionBarItem
                        active={props.active1}
                        text={'Home'} />
                </a>

                <a href="#about">
                    <SectionBarItem
                        active={props.active2}
                        text={'About'} />
                </a>

                <SectionBarItem
                    active={props.active3}
                    text={'Skills'} />
                <SectionBarItem
                    active={props.active4}
                    text={'Projects'} />
                <SectionBarItem
                    active={props.active5}
                    text={'Contact'} />
            </div>

            <div className="bar"></div>
        </div>
    )
}

export default SectionBar
