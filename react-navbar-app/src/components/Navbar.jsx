import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav>
            <button onClick={toggleNavbar}>
                {isOpen ? 'Close' : 'Open'} Menu
            </button>
            {isOpen && (
                <ul>
                    <li><a href="#section1" onClick={(e) => scrollToSection(e, '#section1')}>Section 1</a></li>
                    <li><a href="#section2" onClick={(e) => scrollToSection(e, '#section2')}>Section 2</a></li>
                    <li><a href="#section3" onClick={(e) => scrollToSection(e, '#section3')}>Section 3</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;