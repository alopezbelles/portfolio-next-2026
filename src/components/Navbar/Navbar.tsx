'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Navbar.css';

interface NavbarProps {
  // Props futuras si las necesitas
}

export default function Navbar({}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link href="/" className="navbar-brand">
          <span className="brand-text">Alejandro López</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-link">
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">
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
                Inicio
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                href="/about" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre mí
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                href="/projects" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                href="/contact" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}