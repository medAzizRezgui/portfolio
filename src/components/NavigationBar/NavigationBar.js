import React from 'react'
import Logo from '../../assets/Rez..svg'
import Item from '../Scroll Reveal Item/Item'
import './NavigationBar.scss'
function NavigationBar() {
    return (
        <nav className="navBar">
            <div className="container navBar__container">
                <Item
                    origin={'left'}
                    duration={1000}
                    delay={200}
                    distance={'500px'}
                    scale={1}
                    interval={0}
                    easing={'ease'}
                >
                    <img src={Logo} alt="" className="navBar__logo" />
                </Item>

                <ul className="navBar__list">

                    <Item
                        origin={'top'}
                        duration={1000}
                        delay={500}
                        distance={'500px'}
                        scale={1}
                        interval={0}
                        easing={'ease'}
                    >
                        <ul className="navBar__link"><a href="#about">About</a></ul>
                    </Item>
                    <Item
                        origin={'top'}
                        duration={1000}
                        delay={700}
                        distance={'500px'}
                        scale={1}
                        interval={0}
                        easing={'ease'}
                    >
                        <ul className="navBar__link"><a href="#skills">Skills</a></ul>
                    </Item>
                    <Item
                        origin={'top'}
                        duration={1000}
                        delay={900}
                        distance={'500px'}
                        scale={1}
                        interval={0}
                        easing={'ease'}
                    >
                        <ul className="navBar__link"><a href="#projects">Projects</a></ul>
                    </Item>
                    <Item
                        origin={'top'}
                        duration={1000}
                        delay={1100}
                        distance={'500px'}
                        scale={1}
                        interval={0}
                        easing={'ease'}
                    >
                        <ul className="navBar__link"><a href="#contact">Contact</a></ul>
                    </Item>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
