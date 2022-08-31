
import { useRef } from "react";
import { useState } from "react";
import './Cadrousel.css';

export const CarouselVertical = ({children}) => {

    const [slide, setSlide] = useState(0);
    const [heightV, setHeigthV] = useState(0);
    const vert = useRef();
    let heightTmp = 0;

    window.addEventListener('mouseout', ()=> {

        heightTmp = vert.current.offsetWidth;
    });

    let key = -1;

    function right(){
        setHeigthV(heightTmp)
            setSlide(slide - heightV);
            console.log(heightV)
    };

    function left(){

            setSlide(slide + heightV);
    };

    function setCircle(elem){
        setSlide(elem.target.dataset.id * - heightV)
    }
    
    let stX = 0,
        nowX = 0;

    function swipe(x){

        if(x > 0)left();
        if(x < 0)right();
    }
        
    function TouchStart(e){

        stX = e.changedTouches[0].screenX;
    }

    function MouseStart(e){

        e.preventDefault();
        stX = e.clientX;
    }

    function TouchEnd(e){

        nowX = e.changedTouches[0].screenX - stX;
        swipe(nowX);
    }

    function MouseEnd(e){

        nowX = e.clientX - stX;
        swipe(nowX);
    }


    function circles(){
        return(
            children.map(elem =>{
                key++;

                return (
                    <div key={key} data-id={key} className={`carousel__circles_item${slide / heightV === -key ? "-active" : ""}`} onClick={setCircle}></div>
                );
            })
        )
    };
    
    return(

        <div className="carousel">
            <div className="carousel__window" ref={vert}>
                <div className="carousel__all_v"
                style={{transform: `translateY(${slide}px)`}}
                onTouchStart={TouchStart}
                onTouchEnd={TouchEnd}
                onMouseDown={MouseStart}
                onMouseUp={MouseEnd}>
                    {children}
                </div>
            </div>

            <button className="carousel__btn_v" onClick={right}></button>
            <button className="carousel__btn_v carousel__btn-left_v" onClick={left}></button>

            <div className="carousel__circles">{circles()}</div>
        </div>
    );
}
