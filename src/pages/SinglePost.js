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
import {Helmet} from "react-helmet";


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
			ingress,
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
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{'Södrabloggen - ' + singlePost.title}</title>
				<meta name="description" content="Vi är en oberoende blogg som skriver och följer laget vi älskar J-Södra" />
				<meta property="og:title" content={singlePost.title}/>
				<meta property="og:type" content="article" />
				<meta property="og:image" content={singlePost.mainImage.asset.url}/>
				<meta property="og:url" content={`https://sodrabloggen.se${window.location.pathname}`}/>

				<meta name="twitter:title" content={singlePost.title}/>
				<meta name="twitter:description" content={singlePost.ingress} />
				<meta name="twitter:image" content={singlePost.mainImage.asset.url} />
				<meta name="twitter:card" content="summary_large_image"/>
				<meta name="twitter:image:alt" content="Södrabloggen.se logga tillsammnas med en illustration av Daniel Ljung"/>	
			</Helmet>
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
						<p>{moment(singlePost.publishedAt).format('Do MMMM YYYY') }</p>
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
		</div>
	)
}

export default SinglePost