import homeImg1 from '../img/swp_1.png';
import homeImg2 from '../img/swp_2.png';
import homeImg3 from '../img/swp_3.png';

function Promo() {
	return (
    <div className="promo">

        <div className="promo__content">

            <h2 className="prime_h2">Solid wood products</h2>
            <span>Oak, beech, ash from <span>1700 CZK</span> per m3</span>
            <button className="prime_btn">Order</button>

        </div>

        <div className="promo__imgs">
            <div className="promo__imgs_l">
                
                <img src={homeImg2} alt="#" />
            </div>

            <div className="promo__imgs_r">

                <img src={homeImg1} alt="#" />
                <img src={homeImg3} alt="#" />

            </div>



        </div>

    </div>
	);
}

export default Promo;