import React from 'react'
import './SectionBarItem.scss'
function SectionBarItem(props) {
    return (
        <div className="sectionBar__item">
            <p className={props.active ? 'text active' : 'text'}>{props.text}</p>
            <span className={props.active ? 'dot active__dot' : 'dot'}></span>
        </div>
    )
}

export default SectionBarItem
