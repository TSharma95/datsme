import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    const [prodListActive, setProdListActive] = useState(false);
    const [hamActive, setHamActive] = useState(false);

    const handleNavProductClick = () => {
        setProdListActive(!prodListActive);
    };

    const handleHamClick = () => {
        setHamActive(!hamActive);
        document.body.classList.toggle('no--scroll');
    }

    return (
        <>
            <nav className={`${hamActive ? 'nav--active' : ''}`}>
                <div className="nav">
                    <div className="logo__section">
                        <img className="logo__section--icon" src="assets/datsme-icon.svg" alt="Datsme icon" />
                        <img className="logo__section--main" src="assets/datsme.svg" alt="Datsme logo" />
                        <span className="logo__section--version">v3.0</span>
                    </div>
                    <ul className="nav__list">
                        <li>Home</li>
                        <li className="product" id='navProduct' onClick={handleNavProductClick}>
                            Product <img className="down-arrow" src="assets/down-arrow.svg" alt="down arrow" />
                            {prodListActive && (
                                <div className="product__list">
                                    <div className="product__name">
                                        <div className="image image--learn">
                                            <img src="assets/prod-list-learn.webp" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="content__main">
                                                <p className="text--learn">Learn</p>
                                                <span>Learn, Track & Improve your Socializing Skills</span>
                                            </div>
                                            <img src="assets/arrow-right.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="product__name">
                                        <div className="image image--connect">
                                            <img src="assets/prod-list-connect.webp" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="content__main">
                                                <p className="text--connect">Connect</p>
                                                <span>Grow, Engage & Evolve with Intellectual Community</span>
                                            </div>
                                            <img src="assets/arrow-right.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="product__name">
                                        <div className="image image--manage">
                                            <img src="assets/prod-list-manage.webp" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="content__main">
                                                <p className="text--manage">Manage</p>
                                                <span>Manage Everyone you know, in one place</span>
                                            </div>
                                            <img src="assets/arrow-right.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/plans">Plans</Link></li>
                    </ul>
                    <button className="nav__download">
                        <div className="download__text">
                            Try Datsme
                            <img className="download__text--img" src="assets/arrow-right.svg" alt="arrow right" />
                        </div>
                    </button>

                    {/* for mobile menu  */}
                    <div className={`hamburger ${hamActive ? 'ham--active' : ''}`} id="hamburger" onClick={handleHamClick}>
                        <div className="line-1 lines"></div>
                        <div className="line-2 lines"></div>
                        <div className="line-3 lines"></div>
                    </div>
                </div>
                {/* for mobile menu  */}
                <div className="mobile__menu">
                    <div className="mobile__menu--list">
                        <ul className="mobile__list">
                            <li>Home</li>
                            <li className="product" id='navProduct' onClick={handleNavProductClick}>
                                <div className={`text ${prodListActive ? 'text--active' : ''}`}>
                                    Product <img className="down-arrow" src="assets/down-arrow.svg" alt="down arrow" />
                                </div>
                                {prodListActive && (
                                    <div className="menu__list">
                                        <div className="product__name">
                                            <div className="image image--learn">
                                                <img src="assets/prod-list-learn.webp" alt="" />
                                            </div>
                                            <div className="content">
                                                <div className="content__main">
                                                    <p className="text--learn">Learn</p>
                                                    <span>Learn, Track & Improve your Socializing Skills</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__name">
                                            <div className="image image--connect">
                                                <img src="assets/prod-list-connect.webp" alt="" />
                                            </div>
                                            <div className="content">
                                                <div className="content__main">
                                                    <p className="text--connect">Connect</p>
                                                    <span>Grow, Engage & Evolve with Intellectual Community</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product__name">
                                            <div className="image image--manage">
                                                <img src="assets/prod-list-manage.webp" alt="" />
                                            </div>
                                            <div className="content">
                                                <div className="content__main">
                                                    <p className="text--manage">Manage</p>
                                                    <span>Manage Everyone you know, in one place</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li><Link to="/team" onClick={handleHamClick}>Team</Link></li>
                            <li><Link to="/contact" onClick={handleHamClick}>Contact</Link></li>
                            <li><Link to="/plans" onClick={handleHamClick}>Plans</Link></li>
                        </ul>
                    </div>
                    <button className="mobile__menu--button"><span>Try Datsme</span><img src="assets/arrow-right.svg" alt="" /></button>
                </div>
            </nav>
            <div className="overlay--nav"></div>
        </>
    )
}

export default Navbar
