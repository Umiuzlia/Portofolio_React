import React from "react";
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GiPodiumWinner} from 'react-icons/gi'

const Footer = () => {
    return(
        <footer id='footer'>
            <a href="#" className="footer_logo">Miumy</a>
            <ul className="permalinks">
                <li><a href="#">Home</a><AiOutlineHome/></li>
                <li><a href="#about">About</a><AiOutlineUser/></li>
                <li><a href="#experience">Experience</a><BiBook/></li>
                <li><a href="#portofolio">Portofolio</a><GiPodiumWinner/></li>
                <li><a href="#contact">Contact</a><BiMessageSquareDetail/></li>
            </ul>
            <div className="footer_sosials">
                <a href="https://www.instagram.com/miumy2805/"><FiInstagram/></a>
                <a href="https://mobile.facebook.com/umiaulia.kirei"><BsFacebook/></a>
                <a href="https://twitter.com/umiuzliaulia1"><AiFillTwitterCircle/></a>
            </div>
            <p>CopyRight-2022-Umi uzli aulia</p>
        </footer>
    )
}
export default Footer