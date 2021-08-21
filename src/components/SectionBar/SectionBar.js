import React from 'react'
import './SectionBar.scss'
import SectionBarItem from './SectionBarItem/SectionBarItem'
function SectionBar(props) {
    return (
        <div className="sectionBar">
            <div className="items__container">
                <SectionBarItem
                    active={props.active}
                    text={'Home'} />
                <SectionBarItem text={'About me'} />
                <SectionBarItem text={'Skills'} />
                <SectionBarItem text={'Projects'} />
                <SectionBarItem text={'Contact'} />
            </div>

            <div className="bar"></div>
        </div>
    )
}

export default SectionBar
