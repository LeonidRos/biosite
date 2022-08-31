import warn404 from '../../img/warn_404.png';

function Error404(){ 

    return(
        
        <div className="error home">
            <div className="error__img">
                <img src={warn404} alt="" />
            </div>
            <div className="error__description">
                <h2 className="prime_h2">Woops</h2>
                <span>Oh, you must be lost, there is no such page.</span>
                <a href="/" className="prime_btn">Go to the home page</a>
            </div>
        </div>
    );
}

export default Error404;
