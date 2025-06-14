import React from "react";
import "../Pages/MainStyle/Main.css";
import "../font.css";
import Layout from "../layots/header.jsx";
import TourCard from "../components/tourCard.jsx";
import TourCardCheryn from "../components/tourCardCheryn.jsx";
import Gallery from "../components/galleryImages.jsx";
import logo from "../assets/images/logo.png";

import ReviewsComp from "../components/reviews.jsx";

function MainPage() {
  return (
    <div className="mainPage-container-main">
      <Layout />
      {/* БАННЕР ==============================================================================*/}
      <div className="main__container">
        <div className="main__hero">
          <h1 className="main__hero-title">
            <span className="main__title-orange">Group tours in Almaty</span>
            <span className="main_subtitle-white">- the best excursions from kolsaigroup.com</span>
          </h1>
          <h2 className="main__hero-description">
            We organize the best vacation accompanied by an experienced guide
          </h2>
        </div>
      {/* Карты товара  =======================================================================*/}
        <div className="container-obert">
          <div className="main__cards">
            <div className="main__cards-text">
              <p className="main__cards-title">
                we conduct group tours on minibuses
              </p>
              <p className="main__cards-description">
                visit the best sights of Almaty region with the best guides
              </p>
            </div>
            <div className="main__tour-cards">
              <TourCard />
              <TourCardCheryn />
            </div>
          </div>
        </div>
          <div className="main__tours">
            <div className="main__tours-header">
              <button id="view_all_tour">view all tour</button>
            </div>
          {/* Галерея  ======================================================================*/}
          <div className="container-obert">
            <div className="main__tours-images">
              <Gallery />
            </div>
          </div>
          </div>
          {/* ОТЗЫВЫ  =======================================================================*/}
            <div className="container-reviews-header">
              <img className="logo-tripAdvisor" src={logo} alt="tripAdvisor" />
            </div>
            <div className="container-obert">
              <div className="container-rewiews">
                <h5 className="rewiews-h">Rewiews about us</h5>
                <div className="reviews-container-cards">
                    <ReviewsComp />
                </div>
              </div>
            </div>
          {/* ВИДЕО  =======================================================================*/}
          <div className="main__video">
            <iframe
              width="905"
              height="518"
              src="https://www.youtube.com/embed/JBYqsBcR43g?si=dSSO450iD3gRpgXC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
      </div>
    </div>
  );
}

export default MainPage;
