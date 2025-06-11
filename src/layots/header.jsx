import React, { useState } from "react";

// CSS
import './Style/header.css';
import '../font.css';

// Иконки
import faceBook from '../assets/Facebook Circled.svg';
import intagram from '../assets/Instagram.svg';
import YouTube from '../assets/YouTube.svg';
import burger from '../assets/Menu.svg';
import closeIcon from '../assets/Close.svg'; // добавь иконку закрытия

function Layout () {
    const [activeLayout, setActiveLayout] = useState("MAIN");
    const [menuOpen, setMenuOpen] = useState(false);

    const LayoutButClick = (item) => {
        setActiveLayout(item);
        setMenuOpen(false); // Закрываем меню при выборе
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <header>
            <div className="main-container-layout">
                <div className="left-side-layout">
                    <div className="logo-layout">KOLSIA GROUP</div>
                    <div className="menu-layout">
                        {["MAIN", "TOURS", "ABOUT US", "MORE"].map((item) => (
                            <div
                                key={item}
                                className={`item ${activeLayout === item ? "active" : ""}`}
                                onClick={() => LayoutButClick(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="right-side-layout">
                    <div className="contact-layout">
                        <div className="phone-number-layout">+7 747 429 34 99</div>
                        <div className="social-network-layout">
                            <img src={faceBook} width={35} alt="facebook" className="icons-layout" />
                            <img src={intagram} width={35} alt="instagram" className="icons-layout" />
                            <img src={YouTube} width={35} alt="YouTube" className="icons-layout" />
                        </div>
                    </div>
                    <div className="button-and-more-layout">
                        <div className="buts-layout">
                            <button id="right-but-layout">Select Tour</button>
                            <button id="left-but-layout">Our Tour</button>
                        </div>
                        <div className="translate-layout">
                            <div className="rus-or-eng-layout">RUSSIAN</div>
                            <div className="rus-or-eng-layout">ENGLISH</div>
                        </div>
                    </div>
                </div>

                {/* Бургер и логотип для мобильной версии */}
                <div className="mobile-header">
                    <div className="logo-layout">KOLSIA GROUP</div>
                    <img 
                        src={burger}
                        alt="menu"
                        className="burger-icon"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {/* Мобильное меню */}
            {menuOpen && (
                <div className="mobile-menu-overlay">
                    <div className="close-icon" onClick={toggleMenu}>
                        <img src={closeIcon} alt="close" className="close-icon-layout" />
                    </div>
                    <div className="mobile-menu">
                        {["MAIN", "TOURS", "ABOUT US", "MORE"].map((item) => (
                            <div 
                                key={item}
                                className={`mobile-menu-item ${activeLayout === item ? "active" : ""}`}
                                onClick={() => LayoutButClick(item)}
                            >
                                {item}
                            </div>
                        ))}

                        <div className="phone-number-layout">+7 747 429 34 99</div>
                        <div className="social-network-layout">
                            <img src={faceBook} alt="facebook" />
                            <img src={YouTube} alt="youtube" />
                            <img src={intagram} alt="instagram" />
                        </div>

                        <div className="buts-layout">
                            <button id="right-but-layout">Select Tour</button>
                            <button id="left-but-layout">Our Tour</button>
                        </div>

                        <div className="translate-layout">
                            <div className="rus-or-eng-layout">RUSSIAN</div>
                            <div className="rus-or-eng-layout">ENGLISH</div>
                        </div>
                    </div>
                </div>
            )}
            </header>
        </>
    );
}

export default Layout;
