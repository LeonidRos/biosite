
import { useState } from "react";
import './Cadrousel.css';

export const Carousel = ({children}) => {

    const [slide, setSlide] = useState(0);

    let key = -1,
        stX = 0,
        nowX = 0;


    function Right(){
        if(slide !== (children.length - 1) * -100){
            setSlide(slide - 100);
        }
    };

    function Left(){
        if(slide !== 0){
            setSlide(slide + 100);
        }
    };

    function setCircle(elem){
        setSlide(elem.target.dataset.id * -100);
    }

    function Swipe(x){

        if(x > 0)Left();
        if(x < 0)Right();
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
        Swipe(nowX);
    }

    function MouseEnd(e){

        nowX = e.clientX - stX;
        Swipe(nowX);
    }

    function circles(){
        return(
            children.map(elem =>{
                key++;

                return (
                    <div key={key} 
                        data-id={key} 
                        className={`carousel__circles_item${slide / 100 === -key ? "-active" : ""}`} 
                        onClick={setCircle}></div>
                );
            })
        )
    };

    return(

        <div className="carousel">
            <div className="carousel__window">
                <div className="carousel__all"
                    style={{transform: `translateX(${slide}%)`}}
                    onTouchStart={TouchStart}
                    onTouchEnd={TouchEnd}
                    onMouseDown={MouseStart}
                    onMouseUp={MouseEnd}
                >
                    {children}
                </div>
            </div>

            <button className="carousel__btn" onClick={Right}></button>
            <button className="carousel__btn carousel__btn-left" onClick={Left}></button>

            <div className="carousel__circles">{circles()}</div>
        </div>
    );
}
