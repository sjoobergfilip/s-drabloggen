import { useEffect } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import ReactGA from "react-ga4";



function App() {
	useEffect(() => {	
		ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_KEY);
	}, []);


	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route element={<SinglePost/>} path="/nyhet/:slug" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
