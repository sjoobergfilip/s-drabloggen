import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";
import '../assets/css/notFound.scss'

const NotFound = () => {
    return (
        <div className='notFoundCOntainer'>
            <Helmet>
                    <title>Södrabloggen - 404</title>
                    <meta name="description" content="Vi är en oberoende blogg som skriver och följer laget vi älskar J-Södra" />
                    <meta property="og:title" content="Södrabloggen"/>
                    <meta property="og:type" content="article" />
                    <meta property="og:description" content="Vi är en oberoende blogg som skriver och följer laget vi älskar J-Södra"/>
            </Helmet>
            <div className='content'>
                <p>404</p>
                <span>Opppsan denna sidan finns inte, men det finns massa andra bra sidor</span>
                <Link to="/">Gå tillbaka till hem</Link>
            </div>
        </div>
  )
}

export default NotFound