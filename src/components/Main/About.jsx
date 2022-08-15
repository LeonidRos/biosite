import OurWork from '../OurWork';
import AboutComp from '../AboutComp';
import AnyQuest from '../AnyQuest';


function About() {
	
	return (
		<div className="aboutus">
			<div className="box-wr"></div>
			<AboutComp />
			<OurWork />
			<AnyQuest />
		</div>
	);
}

export default About;