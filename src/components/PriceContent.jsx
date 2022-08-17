import {Carousel} from './Carousel/Carousel';
import priceImg1 from '../img/Group1.png'
import priceImg2 from '../img/Group2.png'
import priceImg3 from '../img/Group3.png'
import priceImg4 from '../img/Group4.png'

function PriceContent(){
    
    return(
        <div className="our">
            <h2 className="prime_h2">Price List</h2>

            <Carousel>

                <div className="item">
                    <img src={priceImg1} alt="#" />
                </div>

                <div className="item">
                    <img src={priceImg2} alt="#" />
                </div>

                <div className="item">
                    <img src={priceImg3} alt="#" />
                </div>

                <div className="item">
                    <img src={priceImg4} alt="#" />
                </div>

            </Carousel>
        </div>
    );
}

export default PriceContent;