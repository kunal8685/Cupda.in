import React, { useState } from 'react';
import styles from '../styles/Checkout.module.css';

const Checkout = ({ product, onPayNow }) => {
    const [formData, setFormData] = useState({
        firstName: 'Kunal',
        lastName: 'Jagtap',
        address: '',
        apartment: '',
        city: '',
        state: '',
        pinCode: '',
        phone: ''
    });

    const [discountCode, setDiscountCode] = useState('');
    const [message, setMessage] = useState('');

    const subtotal = product.price * product.quantity;
    const shipping = 0; // FREE shipping
    const taxes = 0; // Including ₹0.00 in taxes
    const total = subtotal + shipping + taxes;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDiscountChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const handleApplyDiscount = () => {
        // Placeholder for discount logic
        console.log(`Applying discount code: ${discountCode}`);
        setMessage('Discount codes are not supported in this demo.');
    };

    const handlePayNow = (e) => {
        e.preventDefault();
        const requiredFields = ['address', 'city', 'state', 'pinCode', 'phone'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                setMessage(`Please fill out all required address fields.`);
                return;
            }
        }
        setMessage('');
        onPayNow(formData);
    };

    return (
        <div className={styles.checkoutContainer}>
            <div className={styles.addressFormContainer}>
                <h2>Add address</h2>
                <form className={styles.addressForm} onSubmit={handlePayNow}>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="country">Country/Region</label>
                            <select id="country" name="country" disabled className={styles.formControl}>
                                <option>India</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className={styles.formControl} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className={styles.formControl} />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required className={styles.formControl} />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="apartment">Apartment, suite, etc. (optional)</label>
                            <input type="text" id="apartment" name="apartment" value={formData.apartment} onChange={handleInputChange} className={styles.formControl} />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required className={styles.formControl} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="state">State</label>
                            <select id="state" name="state" value={formData.state} onChange={handleInputChange} required className={styles.formControl}>
                                <option value="">Select State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                {/* Add more states as needed */}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="pinCode">PIN code</label>
                            <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleInputChange} required className={styles.formControl} />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className={styles.formControl} />
                        </div>
                    </div>
                    {message && <p className={styles.errorMessage}>{message}</p>}
                    <button type="submit" className={styles.payNowButton}>Pay Now</button>
                </form>
            </div>
            
            <div className={styles.orderSummaryContainer}>
                <div className={styles.discountSection}>
                    <input type="text" placeholder="Discount code or gift card" value={discountCode} onChange={handleDiscountChange} className={styles.formControl} />
                    <button onClick={handleApplyDiscount}>Apply</button>
                </div>
                <div className={styles.summaryItem}>
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className={styles.summaryItem}>
                    <span>Shipping</span>
                    <span>FREE</span>
                </div>
                <div className={styles.summaryTotal}>
                    <span>Total</span>
                    <span className={styles.totalPrice}>INR ₹{total.toFixed(2)}</span>
                </div>
                <p className={styles.taxesInfo}>Including ₹{taxes.toFixed(2)} in taxes</p>
            </div>
        </div>
    );
};

export default Checkout;