import React, { useEffect, useMemo, useState } from 'react';
import styles from '../styles/ProductDetail.module.css';

const fitNotes = [
    'Soft breathable fabric',
    'Made for repeat styling',
    'Easy occasion-to-everyday wear'
];

const ProductDetail = ({ product, products = [], onBuyNow, onProductClick }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setSelectedSize('');
        setQuantity(1);
        setMessage('');
    }, [product?.id]);

    const relatedProducts = useMemo(() => (
        products.filter(item => item.id !== product.id).slice(0, 3)
    ), [products, product.id]);

    const handleQuantityChange = (e) => {
        const nextQuantity = Math.max(1, parseInt(e.target.value, 10) || 1);
        setQuantity(nextQuantity);
    };

    const handleBuyNow = () => {
        if (!selectedSize) {
            setMessage('Please select a size before buying.');
            return;
        }

        setMessage('');
        onBuyNow({ ...product, selectedSize, quantity });
    };

    return (
        <main className={styles.productDetailPage}>
            <section className={styles.productDetailContainer}>
                <div className={styles.productImageColumn}>
                    <div className={styles.imageFrame}>
                        <img src={product.images[0]} alt={product.name} className={styles.productImage} />
                    </div>
                    <div className={styles.promiseGrid} aria-label="Product promises">
                        <span>Mindful fabric</span>
                        <span>Detailed finish</span>
                        <span>Styled in Pune</span>
                    </div>
                </div>

                <div className={styles.productInfoColumn}>
                    <p className={styles.eyebrow}>Cupda conscious wardrobe piece</p>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <div className={styles.productPrice}>Rs. {product.price.toFixed(2)}</div>

                    <div className={styles.detailPanel}>
                        {product.sizes && product.sizes.length > 0 && (
                            <div className={styles.formGroup}>
                                <div className={styles.labelRow}>
                                    <span>Select size</span>
                                    <span className={styles.helperText}>Required</span>
                                </div>
                                <div className={styles.sizeGrid}>
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            type="button"
                                            className={`${styles.sizeButton} ${selectedSize === size ? styles.selectedSize : ''}`}
                                            onClick={() => setSelectedSize(size)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className={styles.formGroup}>
                            <label htmlFor="quantity">Quantity</label>
                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1"
                                className={`${styles.formControl} ${styles.quantityInput}`}
                            />
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

                    <div className={styles.notesGrid}>
                        {fitNotes.map(note => (
                            <div className={styles.noteItem} key={note}>
                                <span className={styles.noteIcon}>+</span>
                                <span>{note}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.supportSection}>
                <div className={styles.stylingCard}>
                    <p className={styles.sectionKicker}>Styling suggestion</p>
                    <h2>Build a softer capsule look around this piece.</h2>
                    <p>
                        Pair it with neutral accessories, repeatable footwear, and one textured layer
                        so it works for brunch, workdays, and relaxed occasion dressing.
                    </p>
                </div>

                <div className={styles.testimonialCard}>
                    <p className={styles.sectionKicker}>Customer note</p>
                    <p className={styles.quote}>
                        "The fit felt thoughtful and the styling suggestions made it easy to wear again."
                    </p>
                    <p className={styles.author}>Rucha A.</p>
                </div>
            </section>

            {relatedProducts.length > 0 && (
                <section className={styles.relatedSection}>
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionKicker}>More from Cupda</p>
                        <h2>You may also like</h2>
                    </div>
                    <div className={styles.relatedGrid}>
                        {relatedProducts.map(item => (
                            <button
                                type="button"
                                className={styles.relatedCard}
                                key={item.id}
                                onClick={() => onProductClick(item)}
                            >
                                <img src={item.images[0]} alt={item.name} />
                                <span>{item.name}</span>
                                <strong>Rs. {item.price.toFixed(2)}</strong>
                            </button>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
};

export default ProductDetail;
