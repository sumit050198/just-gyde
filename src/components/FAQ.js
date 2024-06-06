import React from 'react'
import OnlyNav from './OnlyNav';
import Footer from './Footer';

const FAQ = () => {
    return (
        <>
            <OnlyNav />
            <div className="faq container mt-5 ">
                <h1>Frequently Asked Questions</h1>


                <div class="accordion mb-5" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How do I create an account?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show my-2" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>To create an account, click on the "Sign Up" button</strong>  on the top right corner of the page and follow the instructions <code>Just Gyde.</code>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Can I change my password?
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse my-2" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Yes, you can change your password</strong>  by visiting the "Account Settings" section after logging in <code>Just Gyde.</code>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How do I contact customer support?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse my-2" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>You can contact our customer support team by emailing contact@Justgyde.com</strong> or by calling our toll-free number at 1-800-123-4567 <code>Just Gyde.</code>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Do you offer refunds?
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse my-2" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>Refund policies vary depending on the product or service.</strong> Please refer to our refund policy page for more information<code>Just Gyde.</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FAQ
