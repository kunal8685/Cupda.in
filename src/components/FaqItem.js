// src/components/FaqItem.js
import React, { useState } from 'react';
import styles from '../styles/FaqItem.module.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}> {/* Add active class */}
      <button className={styles.questionButton} onClick={toggleOpen}>
        <h3 className={styles.question}>{question}</h3>
        <span className={styles.toggleIcon}>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;