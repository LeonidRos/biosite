
import sliderSrc from '../img/slider.png';
import {Carousel} from './Carousel/Carousel';

function OurWork() {
	return (
    <div className="our">
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
    </div>
	);
}

export default OurWork;