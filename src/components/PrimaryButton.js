import React from "react";
import styles from "../styles/PrimaryButton.module.css";

function PrimaryButton({ children, cart, onClick }) {
  return (
    <button
      className={`${styles.PrimaryButton} ${cart ? styles.cartVariant : null}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
