import React from 'react'
import './SkillsItem.scss'
function SkillsItem(props) {
    return (
        <div className="item__container">
            <img src={props.img} alt="" />
            <p className="item__sub">
                {props.subtitle}
            </p>
        </div>
    )
}

export default SkillsItem
