import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/card.scss'
import Logo from '../assets/img/södrabloggen.png'

const CardSmall = ({post}) => {
    return (
        <Link to={'/nyhet/' + post.slug.current} key={post.slug.current}>
            <div className='card-body-small'>
                <div className='card-container-small'>
                    <div className='card-header-small'>
                        <h1>{post.title}</h1> 
                    </div>
                    <div className='card-footer-small'>
                            <a href={post.twitterLink}>
                                {post.twitterName}
                            </a>
                            <img className='logga' src={Logo} alt="Logga Södrabloggen" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardSmall