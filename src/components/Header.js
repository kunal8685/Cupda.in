import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/">
                    Cupda
                </a>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#products-showcase">Products</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#how-it-works">Process</a></li>
                    <li><a href="#contact-us">Contact</a></li>
                </ul>
            </nav>
            {/* Removed the icons div completely */}
        </header>
    );
};

export default Header;