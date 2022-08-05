import React from "react";
import styles from "../styles/PrimaryHeader.module.css";
import Cart from "./Cart";

function PrimaryHeader() {
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <header className={styles.PrimaryHeader}>
      <div className={styles.firstHalf}>
        <img
          className={styles.logo}
          src="./assets/images/logo.svg"
          alt="logo"
        />
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {navLinks.map((link, index) => (
              <li className={styles.navLinkContainer} key={`navLink-${index}`}>
                <a className={styles.navLink} href>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.secondHalf}>
        <Cart />
        <img
          className={styles.avatar}
          src="./assets/images/image-avatar.png"
          alt="avatar"
        />
      </div>
    </header>
  );
}

export default PrimaryHeader;
