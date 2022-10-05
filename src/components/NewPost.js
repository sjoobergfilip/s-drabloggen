import React, {useEffect, useState} from 'react'
import sanityClient from '../client'

const NewPost = () => {
    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(false);


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
                
            }`
            )
            .then(data => {
                setPostData(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);



    return (
        <div>
            {loading ? (
                <div>
                    <p className="text-center">loading..</p>
                </div>
            ) : (
                <div>
                    {postData &&
                        postData.map((post) => (
                            <h1>{post.title}</h1>
                        ))}
                </div>
            )}
        </div>
    )
}

export default NewPost