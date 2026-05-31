// src/components/ProductDisplay.js (For the "Duchess" section)
import React from 'react';
import styles from '../styles/ProductDisplay.module.css';

const ProductDisplay = ({ imageLeft, imageRight, title, description, link }) => {
  return (
    <section className={styles.productSection}>
      <div className={styles.contentArea}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <a href={link} className="shop-button">Shop Collection</a>
      </div>
      <div className={styles.imageArea}>
        {imageLeft && <img src={imageLeft} alt="Product Left" className={styles.imageLeft} />}
        {imageRight && <img src={imageRight} alt="Product Right" className={styles.imageRight} />}
      </div>
    </section>
  );
};

export default ProductDisplay;