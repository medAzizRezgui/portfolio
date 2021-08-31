import React from 'react'
import sr from './ScrollReveal'

export class RevealMe extends React.Component {
    componentDidMount = () => {
        const config = {
            origin: this.props.origin,
            duration: this.props.duration,
            delay: this.props.delay,
            distance: this.props.distance,
            scale: this.props.scale,
            easing: this.props.easing,
            reset: this.props.reset,
            mobile: this.props.mobile,
        }
        sr.reveal(this.refs.box1, config)
    }







    render() {
        return (
            <section className='testimonial'>
                <div className='row' ref='box1'>
                    {this.props.children}
                </div>

            </section>
        )
    }
}
export default RevealMe