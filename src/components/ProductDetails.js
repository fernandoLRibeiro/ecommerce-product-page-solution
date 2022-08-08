import React, { useContext, useState } from "react";
import { StateContext } from "../ContextProvider";
import CartIcon from "../icons/CartIcon";
import styles from "../styles/ProductDetails.module.css";
import PrimaryButton from "./PrimaryButton";
import QuantityInput from "./QuantityInput";

function ProductDetails() {
  const [state, dispatch] = useContext(StateContext);
  const [counter, setCounter] = useState(0);

  const handleAdd = (item) => {
    dispatch({
      type: "ADD_ITEM",
      item: item,
    });
  };
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
        <PrimaryButton
          onClick={() => {
            if (counter > 0) {
              handleAdd({
                name: "Fall Limited Edition Sneakers",
                price: 250,
                quantity: counter,
                discount: 0.5,
                thumbnail: "./assets/images/image-product-1-thumbnail.jpg",
              });
            }
          }}
        >
          <CartIcon className={styles.cartIcon} />
          Add to cart
        </PrimaryButton>
      </div>
    </div>
  );
}

export default ProductDetails;
