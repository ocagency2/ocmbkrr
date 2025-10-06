import { useState } from 'react';
import '../styles/ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const contactData = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    console.log('Contact form submitted:', contactData);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="contact-form-wrapper">
      <h3>Get In Touch</h3>
      <p className="form-intro">Have questions? We'd love to hear from you.</p>

      {submitStatus === 'success' && (
        <div className="form-success">
          Thank you! We'll be in touch soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-firstName">First Name *</label>
            <input
              type="text"
              id="contact-firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="John"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-lastName">Last Name *</label>
            <input
              type="text"
              id="contact-lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Email *</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-phone">Phone</label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact-message">How can we help? *</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Tell us about your crypto goals..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn-primary btn-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <p className="contact-email">
        Or email us directly at <a href="mailto:contact@teamcryptodrop.com">contact@teamcryptodrop.com</a>
      </p>
    </div>
  );
}
