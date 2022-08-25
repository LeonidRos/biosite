import homeImg1 from '../img/swp_1.png';
import homeImg2 from '../img/swp_2.png';
import homeImg3 from '../img/swp_3.png';

function Promo() {

	return (

        <section className="promo">
            <div className="promo__content">

                <h2 className="prime_h2">Solid wood products</h2>
                <span>Oak, beech, ash from <span>1700 CZK</span> per m3</span>
                <button className="prime_btn">Order</button>

            </div>

            <div className="promo__images">
                <div className="promo__images-left">
                    
                    <img src={homeImg2} alt="#" />
                </div>

                <div className="promo__images-right">

                    <img src={homeImg1} alt="#" />
                    <img src={homeImg3} alt="#" />
                </div>

            </div>

        </section>
	);
}

export default Promo;