import React, { useState } from "react";
import styles from "../styles/Gallery.module.css";
import PreviousIcon from "../icons/PreviousIcon";
import NextIcon from "../icons/NextIcon";
import Modal from "./Modal";

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
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.Gallery}>
      <button
        className={styles.mobileGalleryButton}
        onClick={() => {
          if (mainDisplay === 0) {
            setMainDisplay(galleryItems.length - 1);
          } else {
            setMainDisplay(mainDisplay - 1);
          }
        }}
      >
        <PreviousIcon className={styles.mobileButtonIcon} />
      </button>

      <img
        className={styles.mainImage}
        src={galleryItems[mainDisplay].mainImage}
        alt={galleryItems[mainDisplay].alt}
        onClick={() => setOpen(true)}
      />

      <button
        className={styles.mobileGalleryButton}
        onClick={() => {
          if (mainDisplay === galleryItems.length - 1) {
            setMainDisplay(0);
          } else {
            setMainDisplay(mainDisplay + 1);
          }
        }}
      >
        <NextIcon className={styles.mobileButtonIcon} />
      </button>
      <ul className={styles.thumbnailList}>
        {galleryItems.map((item, index) => (
          <li
            className={styles.thumbnailContainer}
            onClick={() => setMainDisplay(index)}
            key={`gallery thumbnail ${index}`}
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
      <Modal
        open={open}
        closeModal={() => {
          setOpen(false);
        }}
        gallery={galleryItems}
        mainDisplay={mainDisplay}
      />
    </div>
  );
}

export default Gallery;
