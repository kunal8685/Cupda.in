import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';
import TestimonialCard from '../components/TestimonialCard';
import FaqItem from '../components/FaqItem';
import ProductDisplay from '../components/ProductDisplay';
import ThankYouPopup from '../components/ThankYouPopup'; // Import the new pop-up component

import styles from '../styles/HomePage.module.css';

const IMAGE_URLS = {
    product1: 'https://i.pinimg.com/1200x/73/3d/2f/733d2ff2603e332c752e0f792d150227.jpg',
    product2: 'https://i.pinimg.com/736x/36/48/db/3648db6f18849ad88e75a556090de5a6.jpg',
    product3: 'https://i.pinimg.com/1200x/2a/3d/e7/2a3de793f5e78a7fb7a83f5899bb0148.jpg',
    heroRightImage: 'https://i.pinimg.com/1200x/3c/c6/9f/3cc69f038754d6e0adcae9fda88c574e.jpg', // New hero image
};

const HomePage = ({ onShowProducts }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        preferredStyling: '',
        consultationType: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState(null); // 'idle', 'submitting', 'success', 'error'
    const [showPopup, setShowPopup] = useState(false); // New state to control pop-up visibility

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        try {
            const response = await fetch('http://localhost:8080/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData),
                credentials: "include"
            });

            if (response.ok) {
                setSubmitStatus('success');
                setShowPopup(true); // Show the pop-up on success
                setFormData({ // Reset form after successful submission
                    name: '',
                    email: '',
                    preferredStyling: '',
                    consultationType: '',
                    message: ''
                });
                // The pop-up will handle its own closing or can be closed by user action.
                // If you want it to auto-close, add a setTimeout here for setShowPopup(false)
            } else {
                const errorData = await response.json();
                console.error('Submission failed:', errorData);
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 8000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 8000);
        }
    };

    // Function to close the pop-up
    const closePopup = () => {
        setShowPopup(false);
        setSubmitStatus(null); // Reset submit status when pop-up is closed
    };

    return (
        <div className={styles.homePage}>
            <Header />

            {/* 1. Hero Section - Updated to match screenshot */}
            <section id="hero" className={styles.heroSection}>
                <div className={`${styles.heroContentWrapper} container`}>
                    <div className={styles.heroLeftContent}>
                        <h1 className={styles.heroTitle}>Romanticizing Sustainability Through Wardrobe Styling</h1>
                        <p className={styles.heroSubtitle}>Discover your timeless style with Cupda — where elegance meets intention. From dailywear to occasion looks, we help you build a conscious and confident wardrobe."</p>
                        <div className={styles.heroButtons}>
                            <button className={`${styles.getStartedButton} primary-button`}>
                                Get Started <span className={styles.arrowIcon}>&rarr;</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.heroImageContainer}>
                        <img src={IMAGE_URLS.heroRightImage} alt="Team working together" className={styles.heroImage} />
                    </div>
                </div>
                {/* Pixelated background elements - will be handled by CSS pseudo-elements */}
                <div className={styles.pixelTopLeft}></div>
                <div className={styles.pixelTopRight}></div>
                <div className={styles.pixelBottomLeft}></div>
            </section>

            {/* 2. About Our Styling Philosophy */}
            <section id="about-philosophy" className={`${styles.aboutSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Our Philosophy</h2>
                    <div className={styles.philosophyContent}>
                        <p>At Cupda, we believe styling is more than just wearing clothes — it’s a reflection of your values, lifestyle, and individuality. Rooted in sustainability and timeless design, our wardrobe styling service helps you build a wardrobe that is elegant, effortless, and eco-conscious.</p>
                        <p className={styles.focusList}>We focus on:</p>
                        <ul>
                            <li>Enhancing your personal style</li>
                            <li>Decluttering mindfully</li>
                            <li>Curating versatile, long-lasting pieces</li>
                            <li>Introducing hand-crafted, sustainable designs into your wardrobe</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* NEW: Featured Products Section - Moved before Services */}
            <section id="products-showcase" className={`${styles.productsSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Featured Products</h2>
                    <div className={styles.productsGrid}>
                        <ProductDisplay
                            imageLeft={IMAGE_URLS.product1}
                            title="The Blossom Dress"
                            description="An elegant, flowing dress perfect for any romantic occasion, made with sustainable linen."
                            link="#" // We will handle this link internally in the App component
                        />
                        <ProductDisplay
                            imageLeft={IMAGE_URLS.product2}
                            title="The Timeless Suit"
                            description="A classic, versatile suit designed for the modern professional, crafted from organic cotton."
                            link="#" // We will handle this link internally in the App component
                        />
                        <ProductDisplay
                            imageLeft={IMAGE_URLS.product3}
                            title="The Everyday Blouse"
                            description="A comfortable yet chic blouse, ideal for daily wear or layering, featuring delicate hand-embroidery."
                            link="#" // We will handle this link internally in the App component
                        />
                    </div>
                    <div style={{textAlign: 'center', marginTop: '2rem'}}>
                        <button className="primary-button" onClick={onShowProducts}>
                            Shop All Products
                        </button>
                    </div>
                </div>
            </section>

            {/* 3. Styling Services We Offer */}
            <section id="services" className={`${styles.servicesSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Our Styling Services</h2>
                    <div className={styles.servicesGrid}>
                        <ServiceCard
                            icon="🧵"
                            title="Everyday Wardrobe Styling"
                            description="Minimal, elegant, and timeless looks curated for your daily wear, workwear, or casual days out."
                        />
                        <ServiceCard
                            icon="🎉"
                            title="Occasion Styling"
                            description="Look graceful at events, weddings, or get-to-gethers with personalized styling rooted in romantic fashion."
                        />
                        <ServiceCard
                            icon="🌿"
                            title="Sustainable Wardrobe Building"
                            description="Get expert help in making your wardrobe more sustainable — ethically sourced fabrics, repeatable pieces, and upcycled treasures."
                        />
                        <ServiceCard
                            icon="🪄"
                            title="Custom Lookbook Curation"
                            description="Receive a digital lookbook tailored to your body type, aesthetic, and lifestyle — featuring Cupda and other compatible pieces."
                        />
                        <ServiceCard
                            icon="🧳"
                            title="Travel Capsule Styling"
                            description="Smart, stylish, and space-saving travel wardrobes for vacations, work trips, or destination weddings."
                        />
                    </div>
                </div>
            </section>

            {/* 4. How It Works */}
            <section id="how-it-works" className={`${styles.processSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Our Styling Process</h2>
                    <div className={styles.processGrid}>
                        <ProcessStep
                            number="1"
                            title="Connect"
                            description="Book a consultation (virtual or in-person)."
                        />
                        <ProcessStep
                            number="2"
                            title="Understand You"
                            description="We learn about your lifestyle, preferences, body type & goals."
                        />
                        <ProcessStep
                            number="3"
                            title="Wardrobe Audit"
                            description="Optional: We help you review and declutter your current wardrobe."
                        />
                        <ProcessStep
                            number="4"
                            title="Style Curation"
                            description="We curate looks with Cupda pieces and other compatible items."
                        />
                        <ProcessStep
                            number="5"
                            title="Final Looks & Tips"
                            description="Receive a personalized lookbook with styling guidance and sustainable tips."
                        />
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Cupda? */}
            <section id="why-choose-us" className={`${styles.whyChooseSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Why Style with Us?</h2>
                    <ul className={styles.whyChooseList}>
                        <li>🌱 Sustainable Choices – We integrate eco-conscious fabrics and designs.</li>
                        <li>🕊 Timeless Aesthetic – Our styling celebrates soft elegance and vintage inspiration.</li>
                        <li>🤍 Personal Attention – Your style is uniquely yours — we honor that.</li>
                        <li>🧶 Crafted with Detail – Featuring hand-embroidery, hand-painting, and unique textiles.</li>
                        <li>💼 Professional Yet Romantic – Our styling works seamlessly for modern professionals and creatives alike.</li>
                    </ul>
                </div>
            </section>

            {/* 6. Client Testimonials (Optional) */}
            <section id="testimonials" className={`${styles.testimonialsSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Client Testimonials</h2>
                    <div className={styles.testimonialsGrid}>
                        <TestimonialCard
                            quote="Cupda helped me simplify my wardrobe without compromising style. Every look felt uniquely mine."
                            author="Rucha A., Pune"
                        />
                        <TestimonialCard
                            quote="Their travel capsule styling made my trip a breeze and I received so many compliments!"
                            author="Snehal R., Pune"
                        />
                         
                    </div>
                </div>
            </section>

            {/* 7. Book a Session / Contact Form */}
            <section id="contact-us" className={`${styles.bookSessionSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Ready to Redefine Your Wardrobe?</h2>
                    <p className={styles.bookSessionSubtitle}>Whether you’re just starting your sustainable journey or looking to reinvent your style — Cupda is here to walk with you.</p>
                    <a href="#book-session-form" className="primary-button">Book Now</a>

                    <form id="book-session-form" className={styles.bookingForm} onSubmit={handleSubmit}>
                        <h3>Send us a Message</h3>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email / Contact</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="styling-pref">Preferred Styling</label>
                            <select id="styling-pref" name="preferredStyling" value={formData.preferredStyling} onChange={handleInputChange}>
                                <option value="">Select an option</option>
                                <option value="Everyday Wardrobe Styling">Everyday Wardrobe Styling</option>
                                <option value="Occasion Styling">Occasion Styling</option>
                                <option value="Sustainable Wardrobe Building">Sustainable Wardrobe Building</option>
                                <option value="Custom Lookbook Curation">Custom Lookbook Curation</option>
                                <option value="Travel Capsule Styling">Travel Capsule Styling</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="consultation-type">Consultation Type</label>
                            <select id="consultation-type" name="consultationType" value={formData.consultationType} onChange={handleInputChange}>
                                <option value="">Select type</option>
                                <option value="Virtual">Virtual</option>
                                <option value="In-person (Pune)">In-person (Pune)</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="primary-button" disabled={submitStatus === 'submitting'}>
                            {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>

                        {/* Submission feedback messages - Keeping error message here, success handled by pop-up */}
                        {submitStatus === 'error' && (
                            <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
                                Failed to send your request. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </section>

            {/* 8. FAQs */}
            <section id="faqs" className={`${styles.faqSection} section-padding`}>
                <div className="container">
                    <h2 className="section-heading">Frequently Asked Questions</h2>
                    <div className={styles.faqList}>
                        <FaqItem
                            question="Do I need to buy only Cupda clothes for styling?"
                            answer="Not at all. We mix & match Cupda with your existing wardrobe or suggest ethical alternatives."
                        />
                        <FaqItem
                            question="Is this service available online?"
                            answer="Yes! We offer both in-person (Pune) and virtual consultations."
                        />
                        <FaqItem
                            question="How long is one session?"
                            answer="It ranges between 45 minutes to 90 minutes depending on your needs."
                        />
                    </div>
                </div>
            </section>

            <Footer />

            {/* Render the ThankYouPopup component based on showPopup state */}
            {showPopup && <ThankYouPopup onClose={closePopup} />}
        </div>
    );
};

export default HomePage;