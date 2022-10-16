import React from 'react'
import '../assets/css/main.scss'
import DanielHero from '../assets/img/daniel.png'

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
                <img src={DanielHero} alt="Daniel Ljung" />
            </div>
        </div>
    )
}

export default Hero