import { useState } from 'react';
import '../styles/BookingModal.css';

export default function BookingModal({ service, onClose }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showStripeInfo, setShowStripeInfo] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData = {
      ...formData,
      service: service.title,
      price: service.price,
      timestamp: new Date().toISOString()
    };

    console.log('Booking submitted:', bookingData);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowStripeInfo(true);
    }, 1000);
  };

  if (showStripeInfo) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
          <div className="stripe-notice">
            <div className="notice-icon">💳</div>
            <h3>Payment Integration Required</h3>
            <p>To complete your booking for <strong>{service.title}</strong> ({service.price}), Stripe integration is needed.</p>
            <p className="notice-details">
              Please set up your Stripe account to accept payments:
            </p>
            <ol>
              <li>Create a Stripe account at <a href="https://dashboard.stripe.com/register" target="_blank" rel="noopener noreferrer">dashboard.stripe.com</a></li>
              <li>Get your API keys from the Developers section</li>
              <li>Configure payment processing</li>
            </ol>
            <a
              href="https://bolt.new/setup/stripe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Learn More About Stripe Setup
            </a>
            <p className="contact-info">
              For immediate assistance, contact us at <a href="mailto:contact@teamcryptodrop.com">contact@teamcryptodrop.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>

        <div className="modal-header">
          <h2>Book: {service?.title}</h2>
          <p className="modal-price">{service?.price}</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about your goals and what you'd like to achieve..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary btn-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Continue to Payment'}
          </button>
        </form>
      </div>
    </div>
  );
}
