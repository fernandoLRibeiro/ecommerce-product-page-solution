import React from "react";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import styles from "../styles/QuantityInput.module.css";

function QuantityInput({ value, setValue, min, max }) {
  const handleChange = (e) => {
    if (min > e.target.value) {
      setValue(min);
    } else if (e.target.value > max) {
      setValue(max);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div className={styles.QuantityInput}>
      <button
        className={styles.button}
        onClick={() => {
          if (0 < value) {
            setValue(Number(value) - 1);
          }
        }}
      >
        <MinusIcon className={styles.icon} />
      </button>
      <input
        type="number"
        className={styles.counter}
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
      />

      <button
        className={styles.button}
        onClick={() => {
          if (100 > value) {
            setValue(Number(value) + 1);
          }
        }}
      >
        <PlusIcon className={styles.icon} />
      </button>
    </div>
  );
}

export default QuantityInput;
