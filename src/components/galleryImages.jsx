import React, { useEffect, useState } from "react";
import "./Style/galleryImages.css";

function Gallery() {
  const images = Object.values(
    import.meta.glob("../assets/images/*.jpeg", { eager: true })
  ).map((mod) => mod.default);

  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const updateImages = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 835) {
        setVisibleImages(images.slice(0, 6));
      } else if (screenWidth <= 1085) {
        setVisibleImages(images.slice(0, 12));
      } else {
        setVisibleImages(images.slice(0, 16));
      }
    };

    updateImages();
    window.addEventListener("resize", updateImages);

    return () => window.removeEventListener("resize", updateImages);
  }, []);

  return (
    <div className="gallery-grid">
      {visibleImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Painting ${index + 1}`}
          className="gallery-img"
        />
      ))}
    </div>
  );
}

export default Gallery;
