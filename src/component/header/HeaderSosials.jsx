import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'


export const HeaderSosials = () => {
  return (
    <div className='header_sosials'>
        <a href='http://Linkedin.com' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='http://github.com' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://instagram.com' target="_blank" rel='noreferrer'><GrInstagram/></a>
    </div>
  )
}
export default HeaderSosials