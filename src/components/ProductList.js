import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.css';

const ProductList = ({ products, onProductClick }) => {
    return (
        <div className={styles.productListContainer}>
            {products.map(product => (
                <ProductCard key={product.id} product={product} onProductClick={onProductClick} />
            ))}
        </div>
    );
};

export default ProductList;