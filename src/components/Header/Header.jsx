import { Link } from 'react-router-dom';
import style from './Header.module.css';
import style2 from './Header2.module.css';

import logo from '../../img/logo.png';
import { useState, useEffect} from 'react';

function Header() {

	const [css, setCss] = useState(style);
	const [reload, setReload] = useState(0);

	function routeReload(){
		setReload(reload + 1);
	}

	useEffect(()=>{

		let path = window.location.pathname;

		if(path !== '/')setCss(style2)
		else setCss(style);
	});

	window.addEventListener("popstate", routeReload,false);

	return (
	<header className={css.block}>
		<div className={css.logo}>
            <a href="/">
                <img src={logo} alt="#" />
            </a>
        </div>
		<nav className="nav">
		<ul>
            <li onClick={routeReload}><Link to="/gallery">Gallery</Link></li>
            <li onClick={routeReload}><Link to="/price">Price List</Link></li>
            <li onClick={routeReload}><Link to="/about">About us</Link></li>
            <li onClick={routeReload}><Link to="/contact">Contact</Link></li>
        </ul>
	</nav>
	</header>
	);
}

export default Header;