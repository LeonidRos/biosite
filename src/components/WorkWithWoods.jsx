import homeImg1 from '../img/wood_oak.png';
import homeImg2 from '../img/wood_buk.png';
import homeImg3 from '../img/wood_ash.png';
import { useRef, useState } from 'react';

function WorkWithWoods() {

    const [clX, setClX] = useState({

        pointStart: 0,
        pointNow: 0,

    });

    const slide = useRef(null);


    const SlideX = (e)=>{

        if(window.screen.width >= 1024)return;

        if(e.changedTouches[0].clientX < window.screen.width / 2){
            setClX({

                pointStart: e.changedTouches[0].clientX + 600,
                pointNow: e.changedTouches[0].clientX - clX.pointStart,
                
            });
        }else{
            setClX({

                pointStart: e.changedTouches[0].clientX,
                pointNow: e.changedTouches[0].clientX - clX.pointStart,

            });
        }
    }
    const transform = {

        transform: `translateX(${clX.pointNow}px)`,
        transition: '0.3s'
    }


	return (
    <section className="with">

       <h2 className="prime_h2">The wood we work with</h2>

       <div className="with_woods">
            <div className="with__slide" onTouchMove={SlideX}>
                <div className="with_woods__item" ref={slide} style={transform}>
                    <img src={homeImg1} alt="#" />
                    <h3>Oak</h3>

                    <ul>
                        <li>Durability</li>
                        <li>Beautiful texture</li>
                        <li>Water resistance</li>
                        <li>Expensive</li>
                    </ul>

                </div>

                <div className="with_woods__item" style={transform}>
                    <img src={homeImg2} alt="#" />
                    <h3>Buk</h3>
                    
                    <ul>
                        <li>Durability</li>
                        <li>Hard to handle</li>
                    </ul>

                </div>

                <div className="with_woods__item" style={transform}>
                    <img src={homeImg3} alt="#" />
                    <h3>Ash</h3>
                    
                    <ul>
                        <li>Durability</li>
                        <li>Hard to handle</li>
                    </ul>

                </div>

            </div>

            <div className="scroll__bar" >
                <div className="scroll__swiper"></div>
            </div>
       </div>
    </section>
	);
}

export default WorkWithWoods;