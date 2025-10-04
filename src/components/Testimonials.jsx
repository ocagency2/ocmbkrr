import { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Trader',
      image: '👩‍💼',
      text: 'Crypto Bounty transformed my trading strategy completely. The mentorship program gave me the confidence and skills to generate consistent returns. Highly recommended!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'DeFi Investor',
      image: '👨‍💻',
      text: 'The airdrop farming service has been incredible. I\'ve received tokens worth thousands of dollars that I would have never found on my own. ROI is outstanding.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Crypto Enthusiast',
      image: '👩‍🎓',
      text: 'As a complete beginner, the Crypto Mastery Course was perfect. Clear explanations, practical examples, and ongoing support made learning DeFi easy and fun.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Fund Manager',
      image: '👨‍💼',
      text: 'Their fund management service exceeded expectations. Professional, transparent, and consistently outperforming the market. Best decision I made this year.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="testimonials-content">
        <div className="section-header">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="section-description">
            Join thousands of satisfied clients who've transformed their financial future with Crypto Bounty.
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="carousel-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card glass-card ${
                  index === activeIndex ? 'active' : ''
                }`}
                style={{
                  transform: `translateX(${(index - activeIndex) * 110}%)`,
                  opacity: index === activeIndex ? 1 : 0.3,
                  pointerEvents: index === activeIndex ? 'auto' : 'none'
                }}
              >
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21C3 17.134 6.13401 14 10 14C10.9534 14 11.8667 14.1817 12.7082 14.5138C11.6317 15.1677 10.7364 16.0825 10.1042 17.1679C9.47203 18.2533 9.125 19.473 9.125 20.75H3.5C3.22386 20.75 3 20.9739 3 21.25V21ZM17 14C20.866 14 24 17.134 24 21V21.25C24 21.5261 23.7761 21.75 23.5 21.75H17.875C17.875 19.0676 19.5676 16.75 22.25 16.75H22.5C22.7761 16.75 23 16.5261 23 16.25V16C23 13.7909 21.2091 12 19 12H17C14.7909 12 13 13.7909 13 16V16.25C13 16.5261 13.2239 16.75 13.5 16.75H13.75C16.4324 16.75 18.125 19.0676 18.125 21.75V21ZM10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C12.7614 2 15 4.23858 15 7C15 9.76142 12.7614 12 10 12Z"/>
                  </svg>
                </div>

                <p className="testimonial-text">{testimonial.text}</p>

                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="trust-badges">
          <div className="trust-badge">
            <span className="badge-icon">✓</span>
            <span>Verified Reviews</span>
          </div>
          <div className="trust-badge">
            <span className="badge-icon">⭐</span>
            <span>4.9/5 Rating</span>
          </div>
          <div className="trust-badge">
            <span className="badge-icon">🛡️</span>
            <span>Secure & Trusted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
