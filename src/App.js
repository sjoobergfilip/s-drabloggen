import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';


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
