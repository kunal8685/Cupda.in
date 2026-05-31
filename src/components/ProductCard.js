import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onProductClick }) => {
    return (
        <div className={styles.productCard} onClick={() => onProductClick(product)}>
            <img src={product.images[0]} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productPrice}>₹{product.price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;