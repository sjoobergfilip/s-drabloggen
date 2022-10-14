import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {TbBrandTwitter} from 'react-icons/tb'

import Logo from '../assets/img/södrabloggen.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='logo'>
                <img src={Logo} alt="Logga Södrabloggen" />
            </div>
            <div className='footer-icon'>
                <a  href="https://twitter.com/sodrabloggen" target="_blank" rel="noreferrer"><TbBrandTwitter /></a>
                <a href="https://www.instagram.com/sodrabloggen/"  target="_blank" rel="noreferrer"><BsInstagram /></a>
            </div>
            <div className='mail'>
                <a href="mailto:info@sodrabloggen.se">info@sodrabloggen.se</a>
            </div>
        </div>
    )
}

export default Footer