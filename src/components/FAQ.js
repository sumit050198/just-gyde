import React from 'react'

const FAQ = () => {
  return (
            <div className="faq container mt-5">
                <h1>Frequently Asked Questions</h1>
                <div className="faq-item">
                    <h2>How do I create an account?</h2>
                    <p>To create an account, click on the "Sign Up" button on the top right corner of the page and follow the instructions.</p>
                </div>
                <div className="faq-item">
                    <h2>Can I change my password?</h2>
                    <p>Yes, you can change your password by visiting the "Account Settings" section after logging in.</p>
                </div>
                <div className="faq-item">
                    <h2>How do I contact customer support?</h2>
                    <p>You can contact our customer support team by emailing support@yourwebsite.com or by calling our toll-free number at 1-800-123-4567.</p>
                </div>
                <div className="faq-item">
                    <h2>Do you offer refunds?</h2>
                    <p>Refund policies vary depending on the product or service. Please refer to our refund policy page for more information.</p>
                </div>
                {/* Add more FAQ items as needed */}
            </div>
        );
    }

export default FAQ
