import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import CloseIcon from "../icons/CloseIcon";
import PreviousIcon from "../icons/PreviousIcon";
import NextIcon from "../icons/NextIcon";

function Modal({ open, closeModal, gallery, mainDisplay }) {
  const [main, setMain] = useState(mainDisplay);

  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className={styles.Modal}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.closeButtonContainer}>
          <button className={styles.closeButton} onClick={closeModal}>
            <CloseIcon className={styles.icon} />
          </button>
        </div>
        <div className={styles.gallery}>
          <div className={styles.mainImageContainer}>
            <button
              className={styles.galleryButton}
              onClick={() => {
                if (main === 0) {
                  setMain(gallery.length - 1);
                } else {
                  setMain(main - 1);
                }
              }}
            >
              <PreviousIcon className={styles.buttonIcon} />
            </button>
            <img
              className={styles.mainImage}
              src={gallery[main].mainImage}
              alt={gallery[main].alt}
            />

            <button
              className={styles.galleryButton}
              onClick={() => {
                if (main >= gallery.length - 1) {
                  setMain(0);
                } else {
                  setMain(main + 1);
                }
              }}
            >
              <NextIcon className={styles.buttonIcon} />
            </button>
          </div>
          <ul className={styles.thumbnailList}>
            {gallery.map((item, index) => (
              <li
                className={styles.thumbnailContainer}
                onClick={() => {
                  setMain(index);
                }}
              >
                <img
                  className={`${styles.thumbnail} ${
                    index === main ? styles.active : null
                  }`}
                  src={item.thumbnail}
                  alt={item.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
