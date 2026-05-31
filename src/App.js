import React, { useState } from 'react';
import HomePage from './Pages/HomePage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import './styles/App.css'; // Import global styles

// Dummy product data
const products = [
    {
        id: '1',
        name: 'The Blossom Dress',
        description: 'An elegant, flowing dress perfect for any romantic occasion, made with sustainable linen.',
        images: ['https://i.pinimg.com/1200x/73/3d/2f/733d2ff2603e332c752e0f792d150227.jpg'],
        price: 1598.00,
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: '2',
        name: 'The Timeless Suit',
        description: 'A classic, versatile suit designed for the modern professional, crafted from organic cotton.',
        images: ['https://i.pinimg.com/736x/36/48/db/3648db6f18849ad88e75a556090de5a6.jpg'],
        price: 2500.00,
        sizes: ['XS', 'S', 'M', 'L']
    },
    {
        id: '3',
        name: 'The Everyday Blouse',
        description: 'A comfortable yet chic blouse, ideal for daily wear or layering, featuring delicate hand-embroidery.',
        images: ['https://i.pinimg.com/1200x/2a/3d/e7/2a3de793f5e78a7fb7a83f5899bb0148.jpg'],
        price: 950.00,
        sizes: ['S', 'M', 'L']
    }
];

function App() {
    const [page, setPage] = useState('home'); // 'home', 'products', 'productDetail', 'checkout'
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItem, setCartItem] = useState(null);

    const handleShowProducts = () => {
        setPage('products');
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setPage('productDetail');
    };

    const handleBuyNow = (item) => {
        setCartItem(item);
        setPage('checkout');
    };

    const handlePayNow = (formData) => {
        console.log('Payment process initiated with address:', formData);
        console.log('Order details:', cartItem);
        alert('Payment successful! Thank you for your order.');
        setPage('home');
        setCartItem(null);
    };

    const renderPage = () => {
        switch (page) {
            case 'products':
                return (
                    <div>
                        <button onClick={() => setPage('home')} style={{ margin: '1rem' }}>&larr; Back to Home</button>
                        <ProductList products={products} onProductClick={handleProductClick} />
                    </div>
                );
            case 'productDetail':
                return (
                    <div>
                        <button onClick={() => setPage('products')} style={{ margin: '1rem' }}>&larr; Back to Products</button>
                        <ProductDetail
                            product={selectedProduct}
                            products={products}
                            onBuyNow={handleBuyNow}
                            onProductClick={handleProductClick}
                        />
                    </div>
                );
            case 'checkout':
                return (
                    <div>
                        <button onClick={() => setPage('productDetail')} style={{ margin: '1rem' }}>&larr; Back to Product</button>
                        <Checkout product={cartItem} onPayNow={handlePayNow} />
                    </div>
                );
            default:
                return <HomePage onShowProducts={handleShowProducts} />;
        }
    };

    return (
        <div className="App">
            {renderPage()}
        </div>
    );
}

export default App;
