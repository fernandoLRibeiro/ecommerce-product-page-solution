import React from "react";
import styles from "../styles/PrimaryButton.module.css";

function PrimaryButton({ children, cart }) {
  return (
    <button
      className={`${styles.PrimaryButton} ${cart ? styles.cartVariant : null}`}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
