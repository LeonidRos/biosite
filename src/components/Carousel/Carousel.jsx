
import { useState } from "react";
import './Cadrousel.css';

export const Carousel = ({children}) => {

    const [slide, setSlide] = useState(0);
    let key = -1;

    function right(){
        if(slide !== (children.length - 1) * -100){
            setSlide(slide - 100);
        }
    };

    function left(){
        if(slide !== 0){
            setSlide(slide + 100);
        }
    };

    function setCircle(elem){
        setSlide(elem.target.dataset.id * -100)
    }

    function circles(){
        return(
            children.map(elem =>{
                key++;

                return (
                    <div key={key} data-id={key} className={`carousel__circles_item${slide / 100 === -key ? "-active" : ""}`} onClick={setCircle}></div>
                );
            })
        )
    };

    return(

        <div className="carousel">
            <div className="carousel__window">
                <div className="carousel__all"
                style={{transform: `translateX(${slide}%)`}}>
                    {children}
                </div>
            </div>

            <button className="carousel__btn" onClick={right}></button>
            <button className="carousel__btn carousel__btn-left" onClick={left}></button>

            <div className="carousel__circles">{circles()}</div>
        </div>
    );
}
