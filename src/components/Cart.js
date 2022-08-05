import React from "react";
import styles from "../styles/Cart.module.css";

function Cart() {
  return (
    <div className={styles.Cart}>
      <img
        className={styles.icon}
        src="./assets/images/icon-cart.svg"
        alt="cart"
      />
    </div>
  );
}

export default Cart;
