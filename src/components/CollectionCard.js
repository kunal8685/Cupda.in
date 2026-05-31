// src/components/CollectionCard.js
import React from 'react';
import styles from '../styles/CollectionCard.module.css';

const CollectionCard = ({ image, title, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <a href={link} className="shop-button">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;