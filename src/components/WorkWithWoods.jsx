import homeImg1 from '../img/wood_oak.png';
import homeImg2 from '../img/wood_buk.png';
import homeImg3 from '../img/wood_ash.png';
import { useRef, useState } from 'react';

function WorkWithWoods() {

    const swipe = useRef(null);
    const [swipePosition, setSwipePosition] = useState(0);
    const [nowX, setNowX] = useState(0);

    function touchStart(e){

        setNowX(e.touches[0].clientX);
    }

    function touchMove(e){

        if(swipe.current.clientWidth > 1080)return;
        if(e.targetTouches[0].clientX - nowX > 10 || e.targetTouches[0].clientX - nowX < -250)return;

        setSwipePosition(e.targetTouches[0].clientX - nowX);
    }

    const transform = {
        transform: `translateX(${swipePosition}%)`,
        transition: '0.4s'
    }

    const transformScroll = {
        transform: `translateX(${-swipePosition}px)`,
    }

	return (
    <section className="with">

       <h2 className="prime_h2">The wood we work with</h2>

       <div className="with_woods" ref={swipe} onTouchMove={touchMove} onTouchStart={touchStart}>

            <div style={transform} className="with_woods__item" onTouchMove={touchMove} onTouchStart={touchStart}>
                <img src={homeImg1} alt="#" />
                <h3>Oak</h3>

                <ul>
                    <li>Durability</li>
                    <li>Beautiful texture</li>
                    <li>Water resistance</li>
                    <li>Expensive</li>
                </ul>

            </div>

            <div style={transform} className="with_woods__item" onTouchMove={touchMove} onTouchStart={touchStart}>
                <img src={homeImg2} alt="#" />
                <h3>Buk</h3>
                
                <ul>
                    <li>Durability</li>
                    <li>Hard to handle</li>
                </ul>

            </div>

            <div style={transform} className="with_woods__item" onTouchMove={touchMove} onTouchStart={touchStart}>
                <img src={homeImg3} alt="#" />
                <h3>Ash</h3>
                
                <ul>
                    <li>Durability</li>
                    <li>Hard to handle</li>
                </ul>

            </div>
            <div className="scroll__bar">
                <div style={transformScroll} className="scroll__swiper"></div>
            </div>
       </div>
    </section>
	);
}

export default WorkWithWoods;