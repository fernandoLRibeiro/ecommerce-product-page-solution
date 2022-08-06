import React, { useState } from "react";
import styles from "../styles/Cart.module.css";
import PrimaryButton from "./PrimaryButton";
import CartIcon from "../icons/CartIcon";

function Cart() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className={styles.Cart}>
      <div
        className={styles.container}
        onClick={() => {
          setOpenCart(!openCart);
        }}
      >
        <div className={styles.badge}>3</div>
        <CartIcon
          className={styles.icon}
          src="./assets/images/icon-cart.svg"
          alt="cart"
        />
      </div>
      {openCart && (
        <div className={styles.openCart}>
          <header className={styles.header}>
            <h5 className={styles.heading}>Cart</h5>
          </header>
          <div className={styles.secondHalf}>
            <div className={styles.product}>
              <img
                className={styles.productThumbnail}
                src="./assets/images/image-product-1-thumbnail.jpg"
                alt="product thumbnail"
              />
              <div className={styles.productInfo}>
                <p className={styles.productName}>
                  Fall Limited Edition Sneakers
                </p>
                <div className={styles.priceCluster}>
                  <p className={styles.relativePrice}>$125.00 x 3</p>
                  <p className={styles.totalPrice}>$375.00</p>
                </div>
              </div>
              <img
                className={styles.deleteIcon}
                src="./assets/images/icon-delete.svg"
                alt="delete"
              />
            </div>
            <PrimaryButton cart>Checkout</PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
