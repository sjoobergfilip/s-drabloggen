import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/card.scss'
import Logo from '../assets/img/södrabloggen.png'

const Card = ({post}) => {
    return (
        <Link to={'/nyhet/' + post.slug.current} key={post.slug.current}>
            <div className='card-body'>
                <div className='card-container'>
                    <div className='card-header'>
                        <h1>{post.title}</h1> 
                    </div>
                    <div className='card-footer'>
                                {post.twitterName}
                            <img className='logga' src={Logo} alt="Logga Södrabloggen" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card