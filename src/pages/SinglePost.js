import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from '../components/Footer'
import NavbarNews from '../components/NavbarNews'
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import LazyHero from "react-lazy-hero";
import moment from 'moment'
import 'moment/locale/sv'
import ReactGA from "react-ga4";
import { Share } from 'react-twitter-widgets'


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

const SinglePost = () => {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();
	moment.locale('sv');  

useEffect(() => {
	ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
    sanityClient
    .fetch(
		`*[slug.current == "${slug}"]{
			title,
			_id,
			slug,
			publishedAt,
			mainImage{
				asset->{
					_id,
					url
				}
			},
			body,
			"name": author->name,
			"twitterName": author->twitterName,
			"twitterLink": author->twitterLink,
			"authorImage": author->image
		}`
	)
		.then((data) => setSinglePost(data[0]))
		.catch(console.error);
}, [slug]);

	if (!singlePost) return <div>Loading...</div>;
	return (
		<>
			<NavbarNews />
			<main>
				<LazyHero color="#0C2309" imageSrc={singlePost.mainImage.asset.url}></LazyHero>
				<div className="post-body">
					<div className="header">
						<h1>
							{singlePost.title}
						</h1>
						<div className="authorImage">
							<img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name}/>
							<a href={singlePost.twitterLink}>{singlePost.twitterName}</a>
						</div>
						<p>{moment().format('Do MMMM YYYY',singlePost.publishedAt) }</p>
						{/* <Share url={'https://dev.twitter.com/web/tweet-button'} options={{ size: "large" }} /> */}
						<Share url={`https://sodrabloggen.se${window.location.pathname}`} options={{ size: "large" }} />
					</div>
					
					<BlockContent
						blocks={singlePost.body}
						projectId={process.env.REACT_APP_SANITY_PRODUCT_KEY}
						dataset="production"
						/>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default SinglePost