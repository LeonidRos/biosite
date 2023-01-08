import sliderSrc from '../img/slider.png';
import {Carousel} from './Carousel/Carousel';

function OurWork() {
	return (
    <section className="our">
         <h2 className="prime_h2">Our work</h2>

         <Carousel>

            <div className="item">
                <img src={sliderSrc} alt="#" />
            </div>
            
            <div className="item">
                <img src={sliderSrc} alt="#" />
            </div>

            <div className="item">
                <img src={sliderSrc} alt="#" />
            </div>

            <div className="item">
                <img src={sliderSrc} alt="#" />
            </div>

            <div className="item">
                <img src={sliderSrc} alt="#" />
            </div>

         </Carousel>
    </section>
	);
}

export default OurWork;