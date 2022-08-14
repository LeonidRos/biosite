
import Promo from '../Promo';
import With from '../WorkWith';
import OurWork from '../OurWork';
import AboutComp from '../AboutComp';
import Advantages from '../Advantages';


function Home() {
	return (
	
	<div className="home">
		<div className="home__wrapp">
		<Promo />
		<div className="box"></div>
		<With />
		<OurWork />
		<Advantages />
		</div>
		<AboutComp />
	</div>

	);
}

export default Home;