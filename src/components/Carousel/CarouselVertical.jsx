
import { useRef, useEffect, useState } from "react";
import './Cadrousel.css';

export const CarouselVertical = ({children}) => {

    const [slide, setSlide] = useState(0);
    const [heightV, setHeigthV] = useState(0);
    const vert = useRef();

    let stX = 0,
        nowX = 0;

    function Down(){

        if(slide <= -vert.current.children[0].offsetHeight + heightV)return;
        setSlide(slide - heightV);
    };

    function Up(){

        if(slide >= 0)return;
        setSlide(slide + heightV);
    };

    function setCircle(elem){
        
        setSlide(elem.target.dataset.id * -heightV)
    }

    function swipe(x){

        if(x > 0)Up();
        if(x < 0)Down();
    }
        
    function TouchStart(e){

        stX = e.changedTouches[0].screenX;
    }

    function MouseStart(e){

        e.preventDefault();
        stX = e.clientY;
    }

    function TouchEnd(e){

        nowX = e.changedTouches[0].screenX - stX;
        swipe(nowX);
    }

    function MouseEnd(e){

        nowX = e.clientY - stX;
        swipe(nowX);
    }

    useEffect(()=>{

        if(!vert)return;
        if(heightV === 0)setHeigthV(vert.current.offsetHeight)

    },[heightV])

    function circles(){

        if(vert.current === undefined)return;
        let arrForMap = [],
            tmp = Math.round(vert.current.children[0].offsetHeight / heightV);

        for(let i = 0; tmp > i; i++){
            arrForMap.push(i)
        }

        return(
            
            arrForMap.map(elem =>{
                
                return (
                    <div key={elem} 
                        data-id={elem} 
                        className={`carousel__circles_item${slide / heightV === -elem ? "-active" : ""}`} 
                        onClick={setCircle}>
                    </div>
                );
            })
        )
    };
    
    return(

        <div className="carousel">
            <div className="carousel__window_v" ref={vert}>
                <div className="carousel__all_v"
                style={{transform: `translateY(${slide}px)`}}
                onTouchStart={TouchStart}
                onTouchEnd={TouchEnd}
                onMouseDown={MouseStart}
                onMouseUp={MouseEnd}>
                    {children}
                </div>
            </div>

            <button className="carousel__btn_v" onClick={Down}></button>
            <button className="carousel__btn_v carousel__btn-left_v" onClick={Up}></button>

            <div className="carousel__circles">{circles()}</div>
        </div>
    );
}
