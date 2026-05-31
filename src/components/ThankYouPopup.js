// src/components/ThankYouPopup.js
import React from 'react';
import styles from '../styles/ThankYouPopup.module.css'; // Create this CSS module

const ThankYouPopup = ({ onClose }) => {
    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <h2>Thank You!</h2>
                <p>Your styling session request has been sent successfully!</p>
                <button onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
};

export default ThankYouPopup;