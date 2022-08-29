import React from "react";
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
    return(
        <footer id='footer'>
            <a href="#" className="footer_logo">Miumy</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer_sosials">
                <a href="https://www.instagram.com/miumy2805/"><FiInstagram/></a>
                <a href="https://mobile.facebook.com/umiaulia.kirei"><BsFacebook/></a>
                <a href="https://twitter.com/umiuzliaulia1"><AiFillTwitterCircle/></a>
            </div>
        </footer>
    )
}
export default Footer