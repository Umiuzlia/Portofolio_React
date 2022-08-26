import React from "react";
import './about.css'
import ME from '../../assets/me-about.JPG'

const About = () => {
    return(
        <section id="about">
            <h5>Get To Me</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-img">
                        <image src={ME} alt="About Image" />
                    </div>
                    <div className="about_container">
                        <div className="about_cards"></div>
                            <article className="about_card">
                                <h5>Fresh Graduate</h5>
                                <small>Kimia</small>
                            </article>
                            <article className="about_card">
                                <h5>Web Depelover</h5>
                                <small>Front-end</small>
                            </article>
                            <article className="about_card">
                                <h5>Project</h5>
                                <small>Website 75% complited</small>
                            </article>
                            <p>Saya Seorang FreshGraduate Kimia dan saat ini saya mengeksplore diri sendiri dalam bidang Frond-End</p>
                            <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About