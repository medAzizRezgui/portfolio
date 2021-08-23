import React from 'react'
import SectionBar from '../SectionBar/SectionBar'
import Item from '../Scroll Reveal Item/Item'

import Face from '../../assets/Image.png'
import './About.scss'
function About() {
    return (
        <div id="about" className="container about__container">


            <Item
                origin={'top'}
                duration={1000}
                delay={1500}
                distance={'500px'}
                scale={1}

                easing={'ease'}
            >
                <SectionBar active2={true} />
            </Item>

            <div className="about__content">
                <div className="about__text">
                    <Item
                        origin={'left'}
                        duration={1000}
                        delay={500}
                        distance={'500px'}
                        scale={1}

                        easing={'ease'}
                    >
                        <h2 className="about__text__subtitle">About me</h2>
                    </Item>

                    <Item
                        origin={'left'}
                        duration={1000}
                        delay={800}
                        distance={'500px'}
                        scale={1}

                        easing={'ease'}
                    >
                        <p className="about__text__desc">
                            Hello! My name is Aziz and I enjoy designing and creating clean and appealing Interfaces and delivering a smooth and pleasant User experience.
                            <br></br>
                            <br></br>

                            My interest in web development started back in 2018 when I decided to find something that I genuinely love!
                            I found out that my <span>
                                attention to details
                            </span> and my <span>
                                love for technology
                            </span> is perfect for me to start a journey as a developer.
                        </p>
                    </Item>

                </div>
                <Item
                    origin={'right'}
                    duration={1000}
                    delay={1000}
                    distance={'500px'}
                    scale={1}
                    easing={'ease'}
                >
                    <div className="about__image">
                        <img src={Face} className={'face'} alt="" />
                    </div>

                </Item>

            </div>



        </div>
    )
}

export default About
