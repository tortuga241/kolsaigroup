import React from "react";
import '../font.css';
import './Style/tourCard.css';

//Импорт картинки
import kolssaiIMG from '../assets/images/CardKolsai.jpeg';

const TourCard = () => {
    return (
        <div className="main-container-card">
            <div className="card-top-part">
                <img src={kolssaiIMG} alt="KOLSIA LAKE" className="img-card-tour" />
                <div className="curcle-card"><p>TOP</p></div>
            </div>
            <div className="card-bottom-part">
                <div className="text-content-card">
                    <h3>GROUP TOUR</h3>
                    <h5>LAKE KOLSAI + KAINDY</h5>
                    <p>Duration tour: 12-14 hours</p>
                    <p>Season: All year round</p>
                </div>
                <div className="buts-and-more">
                    <button id="but-card-tour">Details</button>
                    <p>Group size: 8-12</p>
                </div>
            </div>
        </div>
    );
};

export default TourCard;