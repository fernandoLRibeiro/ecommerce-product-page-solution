import React, { useContext, useState } from "react";
import styles from "../styles/Cart.module.css";
import PrimaryButton from "./PrimaryButton";
import CartIcon from "../icons/CartIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { StateContext } from "../ContextProvider";

function Cart() {
  const [openCart, setOpenCart] = useState(false);
  const [state, dispatch] = useContext(StateContext);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleDelete = (item) => {
    dispatch({
      type: "REMOVE_ITEM",
      item: item,
    });
  };

  const absoluteQuantity =
    state.cart.length > 0 &&
    (state.cart.length > 1
      ? state.cart.reduce((total, item) => total + item.quantity, 0)
      : state.cart[0].quantity);

  return (
    <div className={styles.Cart}>
      <div
        className={styles.container}
        onClick={() => {
          setOpenCart(!openCart);
        }}
      >
        {absoluteQuantity && (
          <div className={styles.badge}>
            {absoluteQuantity > 99 ? "99+" : absoluteQuantity}
          </div>
        )}
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
            {state.cart.length > 0 ? (
              <>
                {state.cart.map((item, index) => (
                  <div className={styles.cartItem} key={`cart item ${index}`}>
                    <div className={styles.product}>
                      <img
                        className={styles.productThumbnail}
                        src={item.thumbnail}
                        alt="product thumbnail"
                      />
                      <div className={styles.productInfo}>
                        <p className={styles.productName}>{item.name}</p>
                        <div className={styles.priceCluster}>
                          <p className={styles.relativePrice}>
                            {formatter.format(
                              item.discount
                                ? item.price * item.discount
                                : item.price
                            )}{" "}
                            x {item.quantity}
                          </p>
                          <p className={styles.totalPrice}>
                            {formatter.format(
                              (item.discount
                                ? item.price * item.discount
                                : item.price) * item.quantity
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(item)}
                    >
                      <DeleteIcon className={styles.deleteIcon} />
                    </button>
                  </div>
                ))}

                <PrimaryButton cart>Checkout</PrimaryButton>
              </>
            ) : (
              <p className={styles.emptyCartText}>Your cart is empty</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
