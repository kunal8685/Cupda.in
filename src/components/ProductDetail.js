import React, { useState } from 'react';
import styles from '../styles/ProductDetail.module.css';

const ProductDetail = ({ product, onBuyNow }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleBuyNow = () => {
        if (!selectedSize) {
            setMessage('Please select a size before buying.');
            return;
        }
        setMessage('');
        onBuyNow({ ...product, selectedSize, quantity: parseInt(quantity) });
    };

    return (
        <div className={styles.productDetailContainer}>
            <div className={styles.productImageColumn}>
                <img src={product.images[0]} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.productInfoColumn}>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productDescription}>{product.description}</p>
                <h3 className={styles.productPrice}>₹{product.price.toFixed(2)}</h3>

                {product.sizes && product.sizes.length > 0 && (
                    <div className={styles.formGroup}>
                        <label htmlFor="size-select">Select Size:</label>
                        <select id="size-select" value={selectedSize} onChange={handleSizeChange} className={styles.formControl}>
                            <option value="">Choose a size</option>
                            {product.sizes.map(size => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                )}
                
                <div className={styles.formGroup}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min="1" className={`${styles.formControl} ${styles.quantityInput}`} />
                </div>

                <button 
                    onClick={handleBuyNow} 
                    className={styles.buyNowButton}
                    disabled={!selectedSize}
                >
                    Buy Now
                </button>
                
                {message && <p className={styles.errorMessage}>{message}</p>}
            </div>
        </div>
    );
};

export default ProductDetail;