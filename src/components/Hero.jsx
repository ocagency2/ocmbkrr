import { useState } from 'react';
import '../styles/Hero.css';
import BookingModal from './BookingModal';

export default function Hero() {
  const [showBooking, setShowBooking] = useState(false);

  const handleGetStarted = () => {
    setShowBooking(true);
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text fade-in">
          <p className="hero-subtitle">Revolutionizing Finance</p>
          <h1 className="hero-title">
            The world's first consumer oriented{' '}
            <span className="gradient-text">DeFi company.</span>
          </h1>
          <p className="hero-description">
            Crypto Bounty is the world's first Airdrop farming company, also specializing in Decentralized Finance.
            We offer mentoring, fund management, and much more.
          </p>
          <button className="btn-primary hero-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>

        <div className="hero-visual">
          <div className="crypto-card floating">
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="crypto-icon">₿</div>
              <div className="crypto-stats">
                <div className="stat">
                  <span className="stat-label">Growth</span>
                  <span className="stat-value gradient-text">+245%</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Volume</span>
                  <span className="stat-value gradient-text">$2.4M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="orbiting-elements">
            <div className="orbit orbit-1">
              <div className="orbit-dot"></div>
            </div>
            <div className="orbit orbit-2">
              <div className="orbit-dot"></div>
            </div>
            <div className="orbit orbit-3">
              <div className="orbit-dot"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>

      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </section>
  );
}
