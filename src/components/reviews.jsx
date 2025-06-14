import React from "react";
import './Style/reviews.css';
import reviews from "./reviews.json"; // путь к JSON
import globe from "../assets/images/reviews-images/globe.svg";     // импорт иконки

// Импорт всех аватарок
import kirsty from "../assets/images/reviews-images/image.png";
import nata from "../assets/images/reviews-images/image2.png";
import loic from "../assets/images/reviews-images/image3.png";

// Сопоставление ключа в JSON с реальным изображением
const avatars = {
  kirsty,
  nata,
  loic,
};

const ReviewsComp = () => {
  return (
    <div className="rev-cont">
      {reviews.map((review, index) => (
        <div key={index} className="main__reviews-card">
            {/* Аватарка */}
          <img
            className="main__reviews-card-image"
            src={avatars[review.avatar]}
            alt={`${review.name}'s avatar`}
          />
            {/* Имя пользователя */}
          <a
            className="main__reviews-card-name"
            href={review.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {review.name}
          </a>
            {/* Текст конктент */}
          <p className="main__reviews-card-description">{review.text}</p>
          <a
            href={review.reviewPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={globe} alt="TripAdvisor" className="main__reviews-card-globe" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ReviewsComp;
