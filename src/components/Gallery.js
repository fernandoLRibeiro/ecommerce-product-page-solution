import React, { useState } from "react";
import styles from "../styles/Gallery.module.css";

function Gallery() {
  const galleryItems = [
    {
      mainImage: "./assets/images/image-product-1.jpg",
      thumbnail: "./assets/images/image-product-1-thumbnail.jpg",
      alt: "white and beige sneakers",
    },
    {
      mainImage: "./assets/images/image-product-2.jpg",
      thumbnail: "./assets/images/image-product-2-thumbnail.jpg",
      alt: "white and beige sneakers on top of rocks",
    },
    {
      mainImage: "./assets/images/image-product-3.jpg",
      thumbnail: "./assets/images/image-product-3-thumbnail.jpg",
      alt: "white and beige sneakers on top of rocks",
    },
    {
      mainImage: "./assets/images/image-product-4.jpg",
      thumbnail: "./assets/images/image-product-4-thumbnail.jpg",
      alt: "white and beige sneakers on top of rocks",
    },
  ];
  const [mainDisplay, setMainDisplay] = useState(0);
  return (
    <div className={styles.Gallery}>
      <img
        className={styles.mainImage}
        src={galleryItems[mainDisplay].mainImage}
        alt={galleryItems[mainDisplay].alt}
      />
      <ul className={styles.thumbnailList}>
        {galleryItems.map((item, index) => (
          <li
            className={styles.thumbnailContainer}
            onClick={() => setMainDisplay(index)}
          >
            <img
              className={`${styles.thumbnail} ${
                index === mainDisplay ? styles.active : null
              }`}
              src={item.thumbnail}
              alt={item.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
