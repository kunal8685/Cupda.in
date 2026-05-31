// src/components/Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h3 className={styles.footerLogo}>Cupda</h3> {/* Use footer logo style */}
          <p>Romanticizing Sustainability Through Wardrobe Styling.</p>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/cupda_clothing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a> {/* Replace with actual handle */}
          </div>
        </div>
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about-philosophy">Our Philosophy</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#why-choose-us">Why Choose Us?</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <ul>
            <li>Email: <a href="mailto:info@cupdastyling.com">info@cupdastyling.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">+91 78755 66456</a></li> {/* Replace with your number */}
            <li>Location: Pune, India</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Book a Session</h3>
          <p>Ready to redefine your wardrobe? Let's connect!</p>
          <a href="#contact-us" className="primary-button">Book Now</a> {/* Link to contact section */}
        </div>
      </div>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Cupda Clothing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;