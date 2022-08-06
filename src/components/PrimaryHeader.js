import React, { useState } from "react";
import styles from "../styles/PrimaryHeader.module.css";
import Cart from "./Cart";
import CloseIcon from "../icons/CloseIcon";
import MenuIcon from "../icons/MenuIcon";

function PrimaryHeader() {
  const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.PrimaryHeader}>
      <div
        className={`${styles.mobileOverlay} ${isOpen && styles.openOverlay}`}
      />
      <div className={styles.firstHalf}>
        <button
          className={styles.mobileNavigationButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <img
          className={styles.logo}
          src="./assets/images/logo.svg"
          alt="logo"
        />
        <nav
          className={`${styles.navigation} ${
            isOpen ? styles.openMobileNavigation : null
          }`}
        >
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
