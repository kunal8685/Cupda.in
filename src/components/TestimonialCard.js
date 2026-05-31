// src/components/TestimonialCard.js
import React from 'react';
import styles from '../styles/TestimonialCard.module.css';

const TestimonialCard = ({ quote, author }) => {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>"{quote}"</p>
      <p className={styles.author}>— {author}</p>
    </div>
  );
};

export default TestimonialCard;