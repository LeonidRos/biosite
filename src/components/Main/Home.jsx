import Promo from '../Promo';
import With from '../WorkWithWoods';
import OurWork from '../OurWork';
import AboutComp from '../AboutComp';
import Advantages from '../Advantages';
import AnyQuest from '../AnyQuest';


function Home() {

	return (

		<div className="home">
			<div className="wrapper">

				<Promo />
				<With />
				<OurWork />
				<Advantages />
				<AboutComp />
				<AnyQuest />
				
			</div>
		</div>
	);	
}

export default Home;