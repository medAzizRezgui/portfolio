import React from 'react'
import SectionBar from '../SectionBar/SectionBar'
import ScrollIcon from '../../assets/icons/scroll.svg'
import Item from '../Scroll Reveal Item/Item'
import a from '../../assets/b.png'

import './Home.scss'
function Home() {


    return (

        <div className="final">


            <div id='home' className="container home__container">
                <Item
                    origin={'top'}
                    duration={1000}
                    delay={4200}
                    distance={'500px'}
                    scale={1}
                    easing={'ease'}
                    mobile={false}
                >
                    <SectionBar active1={true} />
                </Item>

                <div className="home__text">
                    <Item
                        origin={'left'}
                        duration={1000}
                        delay={1800}
                        distance={'500px'}
                        scale={1}

                        easing={'ease'}
                    >
                        <p className="home__text__small">Hi, my name is</p>
                    </Item>
                    <Item
                        origin={'left'}
                        duration={1000}
                        delay={2400}
                        distance={'500px'}
                        scale={1}

                        easing={'ease'}
                    >
                        <h1 className="home__text__title"><span>Rez</span>gui Aziz.</h1>
                    </Item>
                    <Item
                        origin={'left'}
                        duration={1000}
                        delay={3000}
                        distance={'500px'}
                        scale={1}

                        easing={'ease'}
                    >
                        <div className="home__text__subtitle">I build and design stuff for the web and mobile</div>
                    </Item>
                    <Item
                        origin={'left'}
                        duration={1000}
                        delay={3400}
                        distance={'500px'}
                        scale={1}

                        easing={'ease'}
                    >
                        <p className="home__text__desc">
                            I am a freelance web and mobile developer, I build and


                            design <span>
                                fast and aesthetic
                            </span>  web apps while focusing
                            on  <span>
                                delivering the most value

                            </span>  for
                            my clients and team mates and gaining as much experience as possible along the way!
                        </p>
                    </Item>



                    <Item
                        origin={'left'}
                        duration={1000}
                        delay={3800}
                        distance={'500px'}
                        scale={1}

                        easing={'ease'}
                    >
                        <div className="home__buttons">


                            <a href="mailto:azizrezgui4@gmail.com">
                                <button className="contact__btn">

                                    Say Hello!  </button>

                            </a>






                            <a href="#about">
                                <button className="explore__btn">

                                    Explore
                                    <img src={ScrollIcon} alt="" />
                                </button>
                            </a>

                        </div>
                    </Item>

                </div>

                <Item
                    origin={'top'}
                    duration={1000}
                    delay={4600}
                    distance={'0px'}
                    scale={1}
                    easing={'ease'}
                >
                    <img src={a} alt="" className={'a'} />
                </Item>


            </div>
        </div>
    )
}

export default Home
