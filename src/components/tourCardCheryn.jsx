import React from "react";
import '../font.css';
import './Style/tourCardCharyn.css';

//Импорт картинки
import charynIMG from '../assets/images/charyn.jpeg';

const CharynTourCard = () => {
    return (
        <div className="main-container-card">
            <div className="card-top-part">
                <img src={charynIMG} alt="Charyn Canyon" className="img-card-tour" />
                <div className="curcle-card"><p>TOP</p></div>
            </div>
            <div className="card-bottom-part">
                <div className="text-content-card">
                    <h3>GROUP TOUR</h3>
                    <h5>Charyn Canyon</h5>
                    <p>Duration tour: 10-12 hours</p>
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

export default CharynTourCard;