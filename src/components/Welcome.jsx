import '../styles/Welcome.css';

export default function Welcome() {
  return (
    <section id="welcome" className="welcome section">
      <div className="welcome-content fade-in">
        <div className="section-header">
          <span className="section-tag">WELCOME</span>
          <h2 className="section-title">
            Pioneering the Future of{' '}
            <span className="gradient-text">Decentralized Finance</span>
          </h2>
        </div>

        <div className="welcome-grid">
          <div className="welcome-card glass-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Airdrop Farming</h3>
            <p>
              We're the world's first airdrop farming company, maximizing your opportunities in the crypto space
              through strategic participation in promising projects.
            </p>
          </div>

          <div className="welcome-card glass-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>DeFi Expertise</h3>
            <p>
              Specializing in decentralized finance protocols, we navigate complex DeFi ecosystems to optimize
              returns and minimize risks for our clients.
            </p>
          </div>

          <div className="welcome-card glass-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Personal Mentoring</h3>
            <p>
              One-on-one guidance from industry experts to help you master crypto trading, DeFi strategies, and
              wealth building in the blockchain ecosystem.
            </p>
          </div>

          <div className="welcome-card glass-card">
            <div className="card-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Fund Management</h3>
            <p>
              Professional portfolio management services tailored to your risk profile and financial goals,
              leveraging cutting-edge DeFi strategies.
            </p>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number gradient-text">5000+</span>
            <span className="stat-label">Active Users</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number gradient-text">$50M+</span>
            <span className="stat-label">Managed Assets</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number gradient-text">150+</span>
            <span className="stat-label">Airdrops Secured</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number gradient-text">98%</span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
