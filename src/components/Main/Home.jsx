
import Promo from '../Promo';
import With from '../WorkWith';
import OurWork from '../OurWork';


function Home() {
	return (
	
	<div className="home">
		<div className="home__wrapp">
		<Promo />
		<div className="box"></div>
		<With />
		<OurWork />
		</div>
	</div>

	);
}

export default Home;