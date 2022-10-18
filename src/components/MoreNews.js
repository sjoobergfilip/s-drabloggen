import React, {useEffect, useState} from 'react'
import sanityClient from '../client'
import Logo from '../assets/img/södrabloggen.png'
import { Link } from 'react-router-dom'

const MoreNews = () => {
    const [moreNews, setMoreNews] = useState(null)

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]|order(publishedAt desc)[3..10]{
                title,
                slug,
                publishedAt,
                ingress,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                "name": author->name,
                "twitterName": author->twitterName,
                "twitterLink": author->twitterLink,
                
            }`
            )
            .then(data => {
                setMoreNews(data)
            })
            .catch(console.error);
    }, []);


    return (
        <div className='main-container'> 
            <h1 className='header-title'>Fler nyheter</h1>
            
            {moreNews && 
                moreNews.map((post) => 
                
                <div className='more-post-container' key={post.slug.current}>
                    <div className='img-box'>
                        <div className='header'>
                            <h3>{post.title}</h3>
                        </div>
                        <div className='footer'>
                            <a href={post.twitterLink}>{post.twitterName}</a>
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <div className='new-content'>
                        <h1>{post.title}</h1>
                        <p>{post.ingress}</p>
                        <Link className='download-btn' to={'/nyhet/'+ post.slug.current}> Läs mer </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MoreNews