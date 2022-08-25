import { Link } from 'react-router-dom';
import style from './Header.module.css';
import style2 from './Header2.module.css';
import logo from '../../img/logo.png';
import { useState, useEffect, useRef} from 'react';

function Header() {

	const [css, setCss] = useState(style);
	const [reload, setReload] = useState(0);
	const burger = useRef(null);
	const burgerOpen = useRef(null);

	function routeReload(){

		setReload(reload + 1);
	}

	useEffect(()=>{

		let path = window.location.pathname;

		if(path !== '/')setCss(style2)
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

	window.addEventListener("popstate", routeReload,false);

	return (

	<header className={css.block}>
		<div className={css.wrapper}>
			<div className={css.logo} onClick={routeReload}>

					<Link to="/"><img src={logo} alt="#" /></Link>
			</div>

			<nav className="nav">
				<ul>
					<li onClick={routeReload}><Link to="/gallery">Gallery</Link></li>
					<li onClick={routeReload}><Link to="/price">Price List</Link></li>
					<li onClick={routeReload}><Link to="/about">About us</Link></li>
					<li onClick={routeReload}><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>

			<button className='nav__burger_open' ref={burgerOpen} onClick={show}></button>
			
		</div>

		<div className="hide" ref={burger}>

			<button className='nav__burger_close' onClick={close}></button>

			<nav className="nav__list">
				<ul>
					<li onClick={routeReload}><Link to="/">Home</Link></li>
					<li onClick={routeReload}><Link to="/gallery">Gallery</Link></li>
					<li onClick={routeReload}><Link to="/price">Price List</Link></li>
					<li onClick={routeReload}><Link to="/about">About us</Link></li>
					<li onClick={routeReload}><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>

		</div>
	</header>
	);
}

export default Header;