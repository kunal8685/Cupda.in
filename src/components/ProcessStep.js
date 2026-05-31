// src/components/ProcessStep.js
import React from 'react';
import styles from '../styles/ProcessStep.module.css';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className={styles.step}>
      <div className={styles.number}>{number}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProcessStep;