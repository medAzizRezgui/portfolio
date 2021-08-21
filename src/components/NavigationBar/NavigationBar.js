import React from 'react'
import Logo from '../../assets/Rez..svg'
import './NavigationBar.scss'
function NavigationBar() {
    return (
        <nav className="navBar">
            <div className="container navBar__container">
                <img src={Logo} alt="" className="navBar__logo" />
                <ul className="navBar__list">
                    <ul className="navBar__link">About</ul>
                    <ul className="navBar__link">Skills</ul>
                    <ul className="navBar__link">Projects</ul>
                    <ul className="navBar__link">Contact</ul>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
