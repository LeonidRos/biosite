import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.css';
import style2 from './Header2.module.css';
import logo from '../../img/logo.png';

import { useState, useEffect, useRef} from 'react';

export const linkLib = ["/gallery", "/price", "/about", "/contact"];

function Header() {

	const [css, setCss] = useState(style);
	const burger = useRef(null);
	const burgerOpen = useRef(null);
	const location = useLocation();


	useEffect(()=>{

		if(linkLib.find(i => i === location.pathname))setCss(style2)
		else setCss(style);
	});

	function show(e){

		burger.current.className='nav__burger-active';
		burgerOpen.current.className='hide';
	}

	function close(){

		burger.current.className='hide';
		burgerOpen.current.className='nav__burger_open';
	}

	return (

		<header className={css.block} id="head">
			<div className={css.wrapper}>
				<div className={css.logo}>

						<Link to="/"><img src={logo} alt="#" /></Link>
				</div>

				<nav className="nav">
					<ul>
						<li><Link to="/gallery">Gallery</Link></li>
						<li><Link to="/price">Price List</Link></li>
						<li><Link to="/about">About us</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>

				<button className='nav__burger_open' ref={burgerOpen} onClick={show}></button>
				
			</div>

			<div className="hide" ref={burger}>

				<button className='nav__burger_close' onClick={close}></button>

				<nav className="nav__list">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/gallery">Gallery</Link></li>
						<li><Link to="/price">Price List</Link></li>
						<li><Link to="/about">About us</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</nav>

			</div>
		</header>
	);
}

export default Header;