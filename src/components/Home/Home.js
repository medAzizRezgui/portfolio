import React from 'react'
import SectionBar from '../SectionBar/SectionBar'
import './Home.scss'
function Home() {
    return (
        <div className="container home__container">
            <SectionBar active={true} />
        </div>
    )
}

export default Home
