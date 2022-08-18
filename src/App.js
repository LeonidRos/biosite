import { BrowserRouter as Router } from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import './style.css';
import './media.css';

function App() {
	return (
	<div className="app">
		<div className='wrapper'>
			<Router>
				<Header />
				<Main />
			</Router>
		</div>
			<Footer />
	</div>
	);
}

export default App;