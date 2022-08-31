import homeImg1 from '../img/wood_oak.png';
import homeImg2 from '../img/wood_buk.png';
import homeImg3 from '../img/wood_ash.png';
import { useRef, useState } from 'react';

function WorkWithWoods() {

    const swipe = useRef(null);
    const [swipePosition, setSwipePosition] = useState(0);

    let stX = 0,
        nowX = 0;

    function swipeX(x){
        console.log(window.screen.width)
        if(window.screen.width > 975)return;
        if(x > 0 && swipePosition < 0 )setSwipePosition(swipePosition + 120);
        if(x < 0 && swipePosition > -240)setSwipePosition(swipePosition - 120);

    }
        
    function TouchStart(e){

        stX = e.changedTouches[0].screenX
    }

    function MouseStart(e){

        e.preventDefault();
        stX = e.clientX;
    }

    function TouchEnd(e){

        nowX = e.changedTouches[0].screenX - stX;
        swipeX(nowX);
    }

    function MouseEnd(e){

        nowX = e.clientX - stX;
        swipeX(nowX);
    }

    const transform = {
        transform: `translateX(${swipePosition}%)`,
        transition: '0.4s'
    }

    const transformScroll = {
        transform: `translateX(${-swipePosition*5}%)`,
    }

	return (
    <section className="with">

       <h2 className="prime_h2">The wood we work with</h2>

       <div className="with_woods" ref={swipe} onTouchStart={TouchStart} onTouchEnd={TouchEnd} onMouseDown={MouseStart} onMouseUp={MouseEnd}>

            <div className="with_woods__item" style={transform} >
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
            <div className="scroll__bar">
                <div style={transformScroll} className="scroll__swiper"></div>
            </div>
       </div>
    </section>
	);
}

export default WorkWithWoods;