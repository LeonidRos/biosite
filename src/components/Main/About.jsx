import OurWork from '../OurWork';
import AboutComp from '../AboutComp';
import AnyQuest from '../AnyQuest';


function About() {
	
	return (
		<div className="about_bl">
			<div className="box-wr"></div>
			<AboutComp />
			
			<div className="aboutus">
				<OurWork />
				<AnyQuest />
			</div>
		</div>
	);
}

export default About;