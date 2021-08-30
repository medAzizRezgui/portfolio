import React, { useState } from 'react'
import Item from '../Scroll Reveal Item/Item'
import SkillsItem from '../SkillsItem/SkillsItem'
import SectionBar from '../SectionBar/SectionBar'
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import js from '../../assets/icons/js.svg'
import ps from '../../assets/icons/ps.svg'
import xd from '../../assets/icons/xd.svg'
import git from '../../assets/icons/git.svg'
import vsc from '../../assets/icons/vsc.svg'
import react from '../../assets/icons/react.svg'
import next from '../../assets/icons/next.svg'
import three from '../../assets/icons/three.svg'
import redux from '../../assets/icons/redux.svg'
import firebase from '../../assets/icons/firebase.svg'
import site from '../../assets/site.svg'
import box from '../../assets/mystery.png'
import lock from '../../assets/lock.gif'
import cor from '../../assets/cor.svg'
import seo from '../../assets/seo.svg'
import ux from '../../assets/ux.svg'
import res from '../../assets/res.svg'
import './Skills.scss'
function Skills() {
    const [servSection, setServSection] = useState(false);

    let serv = ''
    const [showModal, setShowModal] = useState(false)
    let modal = ''
    if (showModal) {
        modal = <div className="skills__modal">
            <div className="skill__modal__box">
                <img src={lock} alt="" />
                <p>New Section Unlocked !</p>
            </div>
        </div>

        serv = <h1
            onClick={() => setServSection(true)}
            style={{ opacity: !servSection ? '0.3' : "1" }}

            className="skills__services">Services</h1>
    }
    else {
        modal = ''
        serv = <img
            onClick={() => setShowModal(true)}
            src={box} alt="" className='box' />
    }

    return (
        <>
            {modal}
            <div id="skills" className="container skills__container">
                <Item
                    origin={'top'}
                    duration={1000}
                    delay={3600}
                    distance={'500px'}
                    scale={1}
                    easing={'ease'}
                >
                    <SectionBar active3={true}></SectionBar>
                </Item>

                <div className="skills__content">
                    <div className="skills__heading">
                        <Item
                            origin={'left'}
                            duration={1000}
                            delay={200}
                            distance={'500px'}
                            scale={1}
                            easing={'ease'}
                        >

                            <h1
                                style={{ opacity: servSection ? '0.3' : "1" }}
                                onClick={() => setServSection(false)}
                                className="skills__title">Technical skills</h1>
                        </Item>
                        <Item
                            origin={'left'}
                            duration={1000}
                            delay={6000}
                            distance={'0px'}
                            scale={1}
                            easing={'ease'}
                        >

                            {serv}
                        </Item>


                    </div>
                    <div
                        style={{ display: !servSection ? 'none' : '' }}
                        className="services__container">

                        <div className="row servicesRow">
                            <div className="col-6 servicesCol">

                                <div className="service__card">
                                    <div className="service__card__item">
                                        <img src={seo} alt="" className="service__image" />
                                        <p className="service__text">
                                            Search Engine Optimization
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-6 servicesCol">

                                <div className="service__card">
                                    <div className="service__card__item">
                                        <img src={site} alt="" className="service__image" />
                                        <p className="service__text">
                                            Decent and fast web apps
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row servicesRow">
                            <div className="col-6 servicesCol">

                                <div className="service__card">
                                    <div className="service__card__item">
                                        <img src={ux} alt="" className="service__image" />
                                        <p className="service__text">
                                            Interactive Elements
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 servicesCol">

                                <div className="service__card">
                                    <div className="service__card__item">
                                        <img src={res} alt="" className="service__image" />
                                        <p className="service__text">
                                            Fully responsive design
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div

                        style={{ display: servSection ? 'none' : '' }}
                        className="skills__cards">
                        <Item
                            origin={'left'}
                            duration={1000}
                            delay={100}
                            distance={'500px'}
                            scale={1}
                            easing={'ease'}
                        >
                            <div className="row first-row">


                                <div className="col-6 langs">
                                    <div className="lang">
                                        <Item
                                            origin={'top'}
                                            duration={1000}
                                            delay={200}
                                            distance={'500px'}
                                            scale={1}
                                            easing={'ease'}
                                        >
                                            <p className="subtitle">

                                                <span> &lt;/</span>
                                                Languages
                                                <span>
                                                    &gt;
                                                </span>
                                            </p>
                                        </Item>

                                        <div className="icons">
                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={400}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='HTML 5'
                                                    img={html}
                                                />
                                            </Item>

                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={600}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='CSS 3'
                                                    img={css}
                                                />
                                            </Item>

                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={800}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='JavaScript'
                                                    img={js}
                                                />
                                            </Item>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 design">
                                    <div className="ds">
                                        <Item
                                            origin={'top'}
                                            duration={1000}
                                            delay={1000}
                                            distance={'500px'}
                                            scale={1}
                                            easing={'ease'}
                                        >
                                            <p className="subtitle">
                                                <span> &lt;/</span>
                                                Design
                                                <span>
                                                    &gt;
                                                </span>
                                            </p>
                                        </Item>

                                        <div className="icons">
                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={1200}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Adobe Ps'
                                                    img={ps}
                                                />
                                            </Item>

                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={1400}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Adobe Xd'
                                                    img={xd}
                                                />
                                            </Item>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 tools">
                                    <div className="tool">
                                        <Item
                                            origin={'top'}
                                            duration={1000}
                                            delay={1600}
                                            distance={'500px'}
                                            scale={1}
                                            easing={'ease'}
                                        >
                                            <p className="subtitle">
                                                <span> &lt;/</span>
                                                Design
                                                <span>
                                                    &gt;
                                                </span>
                                            </p>
                                        </Item>

                                        <div className="icons">
                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={1800}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Git'
                                                    img={git}
                                                />
                                            </Item>

                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={2000}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Vs Code'
                                                    img={vsc}
                                                />
                                            </Item>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </Item>
                        <Item
                            origin={'left'}
                            duration={1000}
                            delay={2200}
                            distance={'500px'}
                            scale={1}
                            easing={'ease'}
                        >
                            <div className="row second-row">
                                <div className="col-12 tech">
                                    <div className="tek">
                                        <p className="subtitle">
                                            <span> &lt;/</span>
                                            Technologies
                                            <span>
                                                &gt;
                                            </span>
                                        </p>
                                        <div className="icons">

                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={2400}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='React.js'
                                                    img={react}
                                                />
                                            </Item>


                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={2600}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Redux.js'
                                                    img={next}
                                                />
                                            </Item>


                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={2800}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Next.js'
                                                    img={three}
                                                />

                                            </Item>


                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={3000}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Firebase'
                                                    img={firebase}
                                                />
                                            </Item>


                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={3200}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            ><SkillsItem
                                                    subtitle='React Native'
                                                    img={react}
                                                />

                                            </Item>


                                            <Item
                                                origin={'top'}
                                                duration={1000}
                                                delay={3400}
                                                distance={'500px'}
                                                scale={1}
                                                easing={'ease'}
                                            >
                                                <SkillsItem
                                                    subtitle='Three.js'
                                                    img={redux}
                                                />
                                            </Item>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Item>

                    </div>

                </div>
                <Item
                    origin={'left'}
                    duration={1000}
                    delay={4000}
                    distance={''}
                    scale={1}
                    easing={'ease'}
                >
                    <img src={cor} alt="" className="cor" />
                </Item>

            </div>
        </>
    )
}

export default Skills
