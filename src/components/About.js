import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {TbBrandTwitter} from 'react-icons/tb'

const About = () => {
  return (
    <div className='main-container'>
        <div className='content-container'>
            <div>
                <h1 id='about' className='header-title'>Om oss</h1>
                <p>Vi är en idel hemsida som brinner för Jönköpings södra IF. Vi följer och rappoterar om J-Södra. 
                Detta gör vi för att skapa mer kontent och intresse runt den klubben vi älskar. Våra värderingar 
                är att vara så objektiv som möjligt. Vi är inga utbildade journalister utan detta sker på vår fritid. 
                Åsikter och tanker som skrivs på hemsidan är helt egna tankar. Vi håller oss så objektiva som
                möjligt och inte sprider rykten. Vill du hjälpa oss så skicka ett DM på sociala medier. </p>

                <p>Vi är som mest aktiva på twitter. Följ oss gärna där.</p>
            </div>

            <div>
                <h1 className='header-title'>Följ oss</h1>
                <div className='icons'>
                    <a  href="https://twitter.com/sodrabloggen" target="_blank" rel="noreferrer"><TbBrandTwitter /></a>
                    <a href="https://www.instagram.com/sodrabloggen/"  target="_blank" rel="noreferrer"><BsInstagram /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About