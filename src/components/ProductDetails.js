import React, { useState } from "react";
import CartIcon from "../icons/CartIcon";
import styles from "../styles/ProductDetails.module.css";
import PrimaryButton from "./PrimaryButton";
import QuantityInput from "./QuantityInput";

function ProductDetails() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.ProductDetails}>
      <header className={styles.header}>
        <h6 className={styles.subtitle}>SNEAKER COMPANY</h6>
        <h1 className={styles.name}>Fall Limited Edition Sneakers</h1>
      </header>
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className={styles.pricingCluster}>
          <div className={styles.mainPriceCluster}>
            <h4 className={styles.mainPrice}>$125.00</h4>
            <div className={styles.discountBadge}>50%</div>
          </div>
          <p className={styles.noDiscount}>$250.00</p>
        </div>
      </div>

      <div className={styles.controls}>
        <QuantityInput
          value={counter}
          setValue={setCounter}
          max={100}
          min={0}
        />
        <PrimaryButton>
          <CartIcon className={styles.cartIcon} />
          Add to cart
        </PrimaryButton>
      </div>
    </div>
  );
}

export default ProductDetails;
