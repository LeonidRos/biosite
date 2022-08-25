import img1 from '../img/au_1.png';
import img2 from '../img/au_2.png';
import img3 from '../img/au_3.png';


function AboutComp() {
	
	return (
	<section className="about">
		
		<div className="about__left">
			<h2 className="prime_h2">About us</h2>
			<p className="about__description">
			BIO CWT  - We manufacture solid wood products according to individual drawings. We make chairs, armchairs, wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
			</p>
		</div>

		<div className="about__right">
			<img src={img1} alt="#" />
			<img src={img2} alt="#" />
			<img src={img3} alt="#" />
		</div>

	</section>
	);
}


export default AboutComp;