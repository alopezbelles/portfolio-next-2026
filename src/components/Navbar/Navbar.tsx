'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
}

export default function Navbar({}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Actualizar la URL sin recargar la página
      window.history.pushState(null, '', `/#${sectionId}`);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link href="/" className="navbar-brand">
          <Image
            src="/main-logo.png"
            alt="Alejandro López - Portfolio"
            width={50}
            height={50}
            priority
            className="brand-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/#about" 
              className="nav-link"
              onClick={(e) => handleSectionClick(e, 'about')}
            >
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              href="/#contact" 
              className="nav-link"
              onClick={(e) => handleSectionClick(e, 'contact')}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav">
            <li className="mobile-nav-item">
              <Link 
                href="/" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>            
            <li className="mobile-nav-item">
              <Link 
                href="/projects" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                href="/#about" 
                className="mobile-nav-link"
                onClick={(e) => {
                  handleSectionClick(e, 'about');
                  setIsMobileMenuOpen(false);
                }}
              >
                About me
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                href="/#contact" 
                className="mobile-nav-link"
                onClick={(e) => {
                  handleSectionClick(e, 'contact');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}