import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="./sc_logo.jpeg" alt="Shravani Construction Logo" />
               
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#about">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
