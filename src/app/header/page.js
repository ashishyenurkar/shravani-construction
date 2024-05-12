import React from 'react';
import './Header.css'; 
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Image  src="./sc_logo.jpeg" alt="Shravani Construction Logo" />
               
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
