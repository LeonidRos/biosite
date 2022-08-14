import homeImg1 from '../img/wood_oak.png';
import homeImg2 from '../img/wood_buk.png';
import homeImg3 from '../img/wood_ash.png';

function WorkWith() {
	return (
    <section className="with">

       <h2 className="prime_h2">The wood we work with</h2>

       <div className="with__woods">

            <div className="with__woods_item">
                <img src={homeImg1} alt="#" />
                <h3>Oak</h3>

                <ul>
                    <li>Durability</li>
                    <li>Beautiful texture</li>
                    <li>Water resistance</li>
                    <li>Expensive</li>
                </ul>

            </div>

            <div className="with__woods_item">
                <img src={homeImg2} alt="#" />
                <h3>Buk</h3>
                
                <ul>
                    <li>Durability</li>
                    <li>Hard to handle</li>
                </ul>

            </div>

            <div className="with__woods_item">
                <img src={homeImg3} alt="#" />
                <h3>Ash</h3>
                
                <ul>
                    <li>Durability</li>
                    <li>Hard to handle</li>
                </ul>

            </div>
       </div>
    </section>
	);
}

export default WorkWith;