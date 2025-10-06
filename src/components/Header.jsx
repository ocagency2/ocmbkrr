import { useState, useEffect } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">₿</span>
          <span className="logo-text gradient-text">CryptoBounty</span>
          <span className="logo-domain">(teamcryptodrop.com)</span>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('hero')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('welcome')} className="nav-link">Welcome</a>
          <a onClick={() => scrollToSection('services')} className="nav-link">Services</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('testimonials')} className="nav-link">Testimonials</a>
          <a onClick={() => scrollToSection('blog')} className="nav-link">Blog</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button className="btn-primary header-btn" onClick={() => scrollToSection('services')}>
          Get Started
        </button>
      </div>
    </header>
  );
}
