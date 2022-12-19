import React from 'react'
import '../assets/css/main.scss'
import HeroImg from '../assets/img/heroImg.png'

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='slogan'>
                <h1>
                    Tiden Förenar oss
                </h1>
                <span>
                    En plats för alla södraiter
                </span>
            </div>
            <div className='image'>
                <img src={HeroImg} alt="Daniel Ljung" />
            </div>
        </div>
    )
}

export default Hero