import React, {useEffect, useState} from 'react'
import sanityClient from '../client'
import { ThreeCircles } from  'react-loader-spinner'
import Card from './Card'
import CardSmall from './CardSmall'



const NewPost = () => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [latestPost, setLatestPost] = useState(null)
    const [filteredPost, setFilteredPost] = useState(null)


    useEffect(() => {
        setLoading(true);
        sanityClient
            .fetch(
                `*[_type == "post"]|order(publishedAt desc)[0..2]{
                title,
                slug,
                publishedAt,
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
                setPostData(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    useEffect(()=>{
        if(postData){
            console.log(postData)
            setLatestPost(postData[0])
            setFilteredPost(postData.slice(1))
        }
    }, [postData])



    return (
        <div>
            {loading ? (
                <div className='loading-container'>
                    <ThreeCircles
                        height="50"
                        width="50"
                        color="#fff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="three-circles-rotating"
                        outerCircleColor=""
                        innerCircleColor=""
                        middleCircleColor=""
                    />
                </div>
            ) : (
                <div className='main-container'>
                    <h1 id='news' className='header-title'>Senaste nyheterna</h1>
                    <div className='container'>
                        <div className='Latest-Post'>
                            {latestPost &&
                                <Card post={latestPost}/>
                            } 
                        </div>
                            {filteredPost &&
                                filteredPost.map((post, index) => (
                                    <div className={'Post-'+index}>
                                        <CardSmall post={post}/>
                                    </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewPost