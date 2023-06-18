import React from 'react';
import { useState } from 'react';

const Plans = () => {

    const [contentActive, setContentActive] = useState([true, true, true, true]);
    const [priceActive, setPriceActive] = useState([false, false, false, false]);

    const handleContent = (index) => {
        const updatedContentActive = [...contentActive];
        updatedContentActive[index] = !updatedContentActive[index];
        setContentActive(updatedContentActive);
    };

    const handlePrice = (index) => {
        const updatedPriceActive = [...priceActive];
        updatedPriceActive[index] = !updatedPriceActive[index];
        setPriceActive(updatedPriceActive);
    };

    return (
        <main className="plans">
            <div className="plans__header">
                <h1>Choose<span> Perfect Plan </span>for you</h1>
                <p>
                    Our Custom Plans are designed to cater to every need, offering vaue-to-money with extreme flexbility
                    and cost effectivity with supreme quality!
                </p>
            </div>
            <div className="plans__content">
                <div className="plans__content--rise plangrid">
                    <div className="plangrid__toggle">
                        <input className="plangrid__toggle--checkbox priceChecked" id="toggle-checkbox1" type="checkbox" checked={priceActive[0]} onChange={() => handlePrice(0)}></input>
                        <label className="plangrid__toggle--label" htmlFor="toggle-checkbox1">
                            <span className="plangrid__toggle--label-span">Monthly</span>
                            <span className="plangrid__toggle--label-span">Yearly</span>
                        </label>
                    </div>
                    <div className="plangrid__hoverImage hoverImage--rise">
                        <img src="assets/plan-rise.svg" alt="" />
                        <div className="ellipse"></div>
                    </div>
                    <div className="plangrid__content">
                        <div className={`plangrid__content--overview overviewActive ${contentActive[0] ? 'contentActive' : ''}`}>
                            <h2>Datsme Rise</h2>
                            <p>The <strong>#1 choice</strong> for raising your social EQ through <strong>science and skill-building</strong> for better connecting</p>
                            <div className="card">
                                <ul>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" /> Learn from the world’s leading experts</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" /> Master the art of meaningful friendships</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" /> Feel Happy, Secure and Fulfilled</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`plangrid__content--detailed detailedActive ${!contentActive[0] ? 'contentActive' : ''}`}>
                            <h2>Datsme Rise</h2>
                            <p>The <strong>#1 choice</strong> for raising your social EQ through <strong>science and skill-building</strong> for better connecting</p>
                            <h3><strong>Monthly </strong>Subscription</h3>
                            <ul>
                                <li>Unlimited Access to all Datsme Psychological Sessions - for a full month!</li>
                                <li>Access to new content additions on a regular basis</li>
                                <li>75+ Psychological Sessions unlocked</li>
                            </ul>
                        </div>
                        <div className={`plangrid__content--price priceMonthly ${!priceActive[0] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$12.99</span>
                                <span>$9.99</span>
                                <span>per month</span>
                            </div>
                        </div>
                        <div className={`plangrid__content--price priceYearly ${priceActive[0] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$12.99</span>
                                <span>$9.99</span>
                                <span>per year</span>
                            </div>
                        </div>
                    </div>
                    <div className="plangrid__viewDetail">
                        <button className="toggleActive" onClick={() => handleContent(0)}>View Plan Details</button>
                    </div>
                </div>
                <div className="plans__content--hybrid plangrid">
                    <div className="plangrid__toggle">
                        <input className="plangrid__toggle--checkbox priceChecked" id="toggle-checkbox2" type="checkbox" checked={priceActive[1]} onChange={() => handlePrice(1)}></input>
                        <label className="plangrid__toggle--label" htmlFor="toggle-checkbox2">
                            <span className="plangrid__toggle--label-span">Monthly</span>
                            <span className="plangrid__toggle--label-span">Yearly</span>
                        </label>
                    </div>
                    <div className="plangrid__hoverImage hoverImage--hybrid">
                        <img src="assets/plan-hybrid.svg" alt="" />
                        <div className="ellipse"></div>
                    </div>
                    <div className="plangrid__content">
                        <div className={`plangrid__content--overview overviewActive ${contentActive[1] ? 'contentActive' : ''}`}>
                            <h2>Datsme Hybrid</h2>
                            <p>The <strong>#1 choice</strong> for raising your social EQ through <strong>ongoing learning and meaningful connecting!</strong></p>
                            <div className="card">
                                <ul>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Full access to all Expert Sessions</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Premium access to Datsme Social</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Elevate your social EQ with Datsme</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`plangrid__content--detailed detailedActive ${!contentActive[1] ? 'contentActive' : ''}`}>
                            <h2>Datsme Hybrid</h2>
                            <p>The <strong>#1 choice</strong> for raising your social EQ through <strong>ongoing learning and meaningful connecting!</strong></p>
                            <h3><strong>Monthly </strong>Subscription</h3>
                            <ul>
                                <li>Unlimited Access to all Datsme Psychological Sessions - for a full month!</li>
                                <li>Access to new content additions on a regular basis</li>
                                <li>75+ Psychological Sessions unlocked</li>
                            </ul>
                        </div>
                        <div className={`plangrid__content--price priceMonthly ${!priceActive[1] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$14.99</span>
                                <span>$12.99</span>
                                <span>per month</span>
                            </div>
                        </div>
                        <div className={`plangrid__content--price priceYearly ${priceActive[1] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$12.99</span>
                                <span>$9.99</span>
                                <span>per year</span>
                            </div>
                        </div>
                    </div>
                    <div className="plangrid__viewDetail">
                        <button className="toggleActive" onClick={() => handleContent(1)}>View Plan Details</button>
                    </div>
                </div>
                <div className="plans__content--ace plangrid">
                    <div className="plangrid__toggle">
                        <input className="plangrid__toggle--checkbox priceChecked" id="toggle-checkbox3" type="checkbox" checked={priceActive[2]} onChange={() => handlePrice(2)}></input>
                        <label className="plangrid__toggle--label" htmlFor="toggle-checkbox3">
                            <span className="plangrid__toggle--label-span">Monthly</span>
                            <span className="plangrid__toggle--label-span">Yearly</span>
                        </label>
                    </div>
                    <div className="plangrid__hoverImage hoverImage--ace">
                        <img src="assets/plan-ace.svg" alt="" />
                        <div className="ellipse"></div>
                    </div>
                    <div className="plangrid__content">
                        <div className={`plangrid__content--overview overviewActive ${contentActive[2] ? 'contentActive' : ''}`}>
                            <h2>Datsme Ace</h2>
                            <p>The <strong>#1 choice</strong> for meeting, connecting and building <strong>meaningful connections</strong></p>
                            <div className="card">
                                <ul>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Access to 300* elite members of the Twelve Rings Community</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Advanced matching based on your bonding style</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />150+ Message Requests, 3X more profiles, & enhancement visibility</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`plangrid__content--detailed detailedActive ${!contentActive[2] ? 'contentActive' : ''}`}>
                            <h2>Datsme Ace</h2>
                            <p>Explore the Exclusive 12 Friendship
                                <strong> Personality Types</strong> only on the Datsme App!
                            </p>
                            <h3><strong>Monthly </strong>Subscription</h3>
                            <ul>
                                <li>3 X more Profiles</li>
                                <li>Unlimited Friend Requests</li>
                                <li>Premium access to Super Tools with 15 Searches/month</li>
                                <li>Unlimited DMs</li>
                                <li>3 X more visibility on the Platform</li>
                            </ul>
                        </div>
                        <div className={`plangrid__content--price priceMonthly ${!priceActive[2] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$14.99</span>
                                <span>$12.99</span>
                                <span>per month</span>
                            </div>
                        </div>
                        <div className={`plangrid__content--price priceYearly ${priceActive[2] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$12.99</span>
                                <span>$9.99</span>
                                <span>per year</span>
                            </div>
                        </div>
                    </div>
                    <div className="plangrid__viewDetail">
                        <button className="toggleActive" onClick={() => handleContent(2)}>View Plan Details</button>
                    </div>
                </div>
                <div className="plangrid plans__content--upgrade--small">
                    <div className="plangrid__toggle">
                        <input className="plangrid__toggle--checkbox priceChecked" id="toggle-checkbox3" type="checkbox" checked={priceActive[3]} onChange={() => handlePrice(3)}></input>
                        <label className="plangrid__toggle--label" htmlFor="toggle-checkbox3">
                            <span className="plangrid__toggle--label-span">Quarterly</span>
                            <span className="plangrid__toggle--label-span">Yearly</span>
                        </label>
                    </div>
                    <div className="plangrid__hoverImage hoverImage--upgrade">
                        <img src="assets/plan-ugrade.svg" alt="" />
                        <div className="ellipse"></div>
                    </div>
                    <div className="plangrid__content">
                        <div className={`plangrid__content--overview overviewActive ${contentActive[3] ? 'contentActive' : ''}`}>
                            <h2>Datsme Sync</h2>
                            <p>Bring thoughtfulness & depth to your personal & professional network!</p>
                            <div className="card">
                                <ul>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Upgrade your connection limit to 30</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Consciously build & manage your circles</li>
                                    <li><img src="assets/check-circle.svg" alt="check-circle" />Defeat the constraints of a busy life</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`plangrid__content--detailed detailedActive ${!contentActive[3] ? 'contentActive' : ''}`}>
                            <h2>Datsme Sync</h2>
                            <p>We are loosing touch with people faster than we are developing meaningful connections.</p>
                            <h3><strong>Monthly </strong>Subscription</h3>
                            <ul>
                                <li>Unlimited Access to all Datsme Psychological Sessions - for a full month!</li>
                                <li>Access to new content additions on a regular basis</li>
                                <li>75+ Psychological Sessions unlocked</li>
                            </ul>
                        </div>
                        <div className={`plangrid__content--price priceMonthly ${!priceActive[3] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$14.99</span>
                                <span>$12.99</span>
                                <span>per month</span>
                            </div>
                        </div>
                        <div className={`plangrid__content--price priceYearly ${priceActive[3] ? 'priceActive' : ''}`}>
                            <div className="discount">
                                <p>Save 25%</p>
                            </div>
                            <div className="price">
                                <span>$12.99</span>
                                <span>$9.99</span>
                                <span>per year</span>
                            </div>
                        </div>
                    </div>
                    <div className="plangrid__viewDetail">
                        <button className="toggleActive" onClick={() => handleContent(3)}>View Plan Details</button>
                    </div>
                </div>
                <div className="plans__content--upgrade">
                    <div className="upgrade__container">
                        <div className="upgrade__content">
                            <div className={`upgrade__content--overview overviewActive ${contentActive[3] ? 'contentActive' : ''}`}>
                                <h2><strong>Datsme Sync</strong></h2>
                                <p>Bring thoughtfulness & depth to your personal & professional network!</p>
                                <ul>
                                    <li>Upgrade your connection limit to 30</li>
                                    <li></li>
                                    <li>Consciously build & manage your circles</li>
                                    <li></li>
                                    <li>Defeat the constraints of a busy life</li>
                                </ul>
                            </div>
                            <div className={`upgrade__content--detailed detailedActive ${!contentActive[3] ? 'contentActive' : ''}`}>
                                <div className="heading">
                                    <h2><strong>Datsme Sync</strong></h2>
                                    <p>We are loosing touch with people faster than we are developing meaningful connections.</p>
                                </div>
                                <div className="detailed__content">
                                    <h3><strong>Monthly </strong>Subscription</h3>
                                    <ul>
                                        <li>Unlimited Access to all Datsme Psychological Sessions - for a full month!</li>
                                        <li>Access to new content additions on a regular basis</li>
                                        <li>75+ Psychological Sessions unlocked</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`price priceMonthly ${!priceActive[3] ? 'priceActive' : ''}`}>
                                <div className="discount">
                                    <p>Save 25%</p>
                                </div>
                                <span className="price--actual">$5.99</span>
                                <p className="price--discounted"><span>$4.99 </span> / quarter</p>
                            </div>
                            <div className={`price priceYearly ${priceActive[3] ? 'priceActive' : ''}`}>
                                <div className="discount">
                                    <p>Save 25%</p>
                                </div>
                                <span className="price--actual">$5.99</span>
                                <p className="price--discounted"><span>$4.99 </span> / year</p>
                            </div>
                            <div className="detail-button">
                                <button className="toggleActive" onClick={() => handleContent(3)}>View Plan Details</button>
                            </div>
                        </div>
                        <div className="toggle">
                            <div className="image__container">
                                <img src="assets/plan-ugrade.svg" alt="" />
                                <div className="ellipse"></div>
                            </div>
                            <div className="plangrid__toggle upgrade__toggle">
                                <input className="plangrid__toggle--checkbox priceChecked" id="toggle-checkbox4" type="checkbox" checked={priceActive[3]} onChange={() => handlePrice(3)}></input>
                                <label className="plangrid__toggle--label" htmlFor="toggle-checkbox4">
                                    <span className="plangrid__toggle--label-span">Quarterly</span>
                                    <span className="plangrid__toggle--label-span">Yearly</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Plans
