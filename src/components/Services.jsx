import { useState } from 'react';
import '../styles/Services.css';
import BookingModal from './BookingModal';

export default function Services() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowBooking(true);
  };

  const services = [
    {
      title: '1-Year Mentorship',
      price: 'US$500',
      priceValue: 500,
      description: 'Comprehensive year-long mentorship covering crypto trading, DeFi strategies, and portfolio management.',
      features: [
        'Weekly 1-on-1 coaching sessions',
        'Exclusive community access',
        'Live trading analysis',
        'Custom strategy development',
        'Priority support 24/7'
      ],
      available: true
    },
    {
      title: 'Info Call',
      price: 'US$25',
      priceValue: 25,
      description: 'Initial consultation call to discuss your crypto goals and how we can help you succeed.',
      features: [
        '30-minute consultation',
        'Personalized roadmap',
        'Q&A session',
        'Strategy recommendations',
        'Next steps guidance'
      ],
      available: true
    },
    {
      title: 'Crypto Mastery Course',
      price: 'Coming Soon',
      priceValue: 0,
      description: 'Complete beginner to advanced course covering everything you need to succeed in crypto.',
      features: [
        '50+ hours of video content',
        'Hands-on practical exercises',
        'Certificate of completion',
        'Lifetime access to materials',
        'Community forum access'
      ],
      available: false
    },
    {
      title: 'Investment Management',
      price: 'Coming Soon',
      priceValue: 0,
      description: 'Professional management of your crypto portfolio with proven DeFi strategies.',
      features: [
        'Personalized investment strategy',
        'Risk-adjusted returns',
        'Monthly performance reports',
        'Tax optimization support',
        'Dedicated account manager'
      ],
      available: false
    },
    {
      title: 'Airdrop Farming',
      price: 'Coming Soon',
      priceValue: 0,
      description: 'Automated airdrop participation service to maximize your free token opportunities.',
      features: [
        'Multi-chain support',
        'Automated task completion',
        'Real-time opportunity alerts',
        'ROI tracking dashboard',
        'Proven success rate'
      ],
      available: false
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="services-content fade-in">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2 className="section-title">
            Choose Your Path to{' '}
            <span className="gradient-text">Financial Freedom</span>
          </h2>
          <p className="section-description">
            Whether you're a beginner or an experienced trader, we have the perfect solution for your crypto journey.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card glass-card ${service.available ? '' : 'disabled'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-header">
                <h3>{service.title}</h3>
                <div className="service-price">
                  <span className="price gradient-text">{service.price}</span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={service.available ? 'btn-primary' : 'btn-secondary'}
                onClick={() => service.available && handleBookNow(service)}
                disabled={!service.available}
              >
                {service.available ? 'Book Now' : 'Coming Soon'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {showBooking && (
        <BookingModal
          service={selectedService}
          onClose={() => {
            setShowBooking(false);
            setSelectedService(null);
          }}
        />
      )}
    </section>
  );
}
