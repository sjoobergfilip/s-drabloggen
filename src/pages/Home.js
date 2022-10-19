import React, {useEffect} from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
import NewPost from '../components/NewPost'
import MoreNews from '../components/MoreNews'
import About from '../components/About'
import Illustrations from '../components/illustrations'
import Footer from '../components/Footer'
import ReactGA from "react-ga4";
import {Helmet} from "react-helmet";
import meta_IMG from '../assets/img/meta_BG.png'


const Home = () => {
	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
	}, []);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Södrabloggen</title>
				<meta name="description" content="Vi är en oberoende blogg som skriver och följer laget vi älskar J-Södra" />
				<meta property="og:title" content="Södrabloggen"/>
				<meta property="og:type" content="article" />
				<meta property="og:image" content={meta_IMG}/>
				<meta property="og:url" content={window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search}/>
				<meta name="twitter:card" content="summary_large_image"/>
				<meta property="og:description" content="Vi är en oberoende blogg som skriver och följer laget vi älskar J-Södra"/>
				<meta name="twitter:image:alt" content="SÖdrabloggen.se logga tillsammnas med en illustration av Daniel Ljung"/>
			</Helmet>
			<Navbar />
			<Hero />
			<NewPost />
			<MoreNews />
			<About />
			<Illustrations />
			<Footer />
		</div>
	)
}

export default Home