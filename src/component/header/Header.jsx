import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mee.JPG'
import HeaderSosials from './HeaderSosials'

const Header = () => {
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Umi Uzli Aulia</h1>
                <h5 className="text-light">Frond-end Developer</h5>
                <CTA/>
                <HeaderSosials/>

                <div className="me">
                    <img src={ME} alt="mee"/>
                </div>
                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    ) 
}
export default Header