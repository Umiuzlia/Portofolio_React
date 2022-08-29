import React from "react";
import './about.css'
import ME from '../..//assets/me-about.JPG'

const About = () => {
    return(
        <section id="about">
            <h5>Get To Me</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-img">
                    <img src={ME} alt="About_Image"/>
                    </div>
                    <div className="about_container">
                        <div className="about_cards"></div>

                            <p>Saya Seorang FreshGraduate Kimia dan saat ini saya mengeksplore diri sendiri dalam bidang Frond-End</p>
                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About