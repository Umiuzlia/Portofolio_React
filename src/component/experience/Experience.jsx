import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return(
        <section id='experience'>
            <h5>What Skil I have</h5>
            <h2>My Experience</h2>
            <div className='container experience_container'>
                <div className="experience_frondend"></div>
                <h3>Frontend Develover</h3>
                <div className="experience_content">
                    <article className='experience_detail'>
                        <BsPatchCheckFill/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsPatchCheckFill/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsPatchCheckFill/>
                        <div>
                            <h4>JAVASCRIPT</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsPatchCheckFill/>
                        <div>
                            <h4>BOOTSTRAP</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsPatchCheckFill/>
                        <div>
                            <h4>REACT</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}
export default Experience