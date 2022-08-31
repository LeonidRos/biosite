import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Gallery from './Gallery';
import Price from './Price';
import Error404 from './Error404';

export const MainContext = createContext();

function Main() {

	const [library, setLibrary] = useState([]);
	
	return (
		<main className="main">
			<MainContext.Provider value={ {library, setLibrary} }>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/price" element={<Price />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</MainContext.Provider>
		</main>
	);
}

export default Main;