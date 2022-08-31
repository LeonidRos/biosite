import { useState } from 'react';

import logo from '../../img/logo.png';

function Footer(props) {

	const [footerHide, setFooterHide] = useState('footer');

	window.document.addEventListener('mouseout', ()=>{

		if(window.document.querySelector('.error'))setFooterHide('hide')
		else setFooterHide('footer');
	});

	return (
	<footer className={footerHide}>
		<div className='footer__infin'>
			<div className="wrapper">
				<div className="footer__logo">

					<a href="/"><img src={logo} alt="#" /></a>
					<span>Privacy Policy</span>

				</div>

				<div className="footer__phone"><a href="tel:+420 000 000 000">+420 000 000 000</a></div>
				<div className="footer__geo">Na Plzeňce 1166/0150 00</div>
			</div>
        </div>
	</footer>
	);
}

export default Footer;