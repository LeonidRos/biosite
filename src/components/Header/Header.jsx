import Nav from '../Nav';
import style from './Header.module.css';
import logo from '../../img/logo.png';


function Header() {
	return (
	<header className={style.block}>
		<div className={style.logo}>
            <a href="/">
                <img src={logo} alt="#" />
            </a>
        </div>
		<Nav />
	</header>
	);
}

export default Header;