import { Link } from 'react-router-dom';

function Nav() {
	return (
	<nav className="nav">
		<ul>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/price">Price List</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
	</nav>
	);
}

export default Nav;