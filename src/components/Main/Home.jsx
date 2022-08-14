
import Promo from '../Promo';
import With from '../WorkWith';
import OurWork from '../OurWork';
import AboutComp from '../AboutComp';
import Advantages from '../Advantages';
import AnyQuest from '../AnyQuest';


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

		<div className="home__wrapp">
			<AnyQuest />
		</div>
	</div>

	);	
}

export default Home;