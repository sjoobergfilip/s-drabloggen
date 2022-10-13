import React from 'react'
import '../assets/css/navbar.scss'
import Logo from '../assets/img/södrabloggen.png'
import {BsInstagram} from 'react-icons/bs'
import {TbBrandTwitter} from 'react-icons/tb'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <a href='/'><img className='logga' alt='Logga' src={Logo} /></a>
            </div>
            <div className='links'>
                <a href="/">Nyheter</a>
                <a href="/">Illustrationer</a>
                <a href="/">Om Oss</a>
            </div>
            <div className='icons'>
                <a  href="https://twitter.com/sodrabloggen" target="_blank" rel="noreferrer"><TbBrandTwitter /></a>
                <a href="https://www.instagram.com/sodrabloggen/"  target="_blank" rel="noreferrer"><BsInstagram /></a>
            </div>
        </div>
    )
}

export default NavBar