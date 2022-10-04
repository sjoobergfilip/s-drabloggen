import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import SinglePost from './components/SinglePost';


function App() {
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
