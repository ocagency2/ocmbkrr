import { useState, useEffect } from 'react';
import '../styles/CookieBanner.css';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>Cookie Consent</h3>
          <p>
            We use cookies to enhance your browsing experience and analyze our traffic.
            By clicking "Accept", you consent to our use of cookies.
            {' '}
            <a href="/cookies">Learn more</a>
          </p>
        </div>
        <div className="cookie-actions">
          <button onClick={handleDecline} className="btn-secondary">
            Decline
          </button>
          <button onClick={handleAccept} className="btn-primary">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
