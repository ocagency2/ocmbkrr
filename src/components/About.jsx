import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about-content">
        <div className="about-grid">
          <div className="about-text fade-in">
            <div className="section-header">
              <span className="section-tag">ABOUT US</span>
              <h2 className="section-title">
                Building the Future of{' '}
                <span className="gradient-text">Finance Together</span>
              </h2>
            </div>

            <p className="about-description">
              Crypto Bounty was founded with a singular vision: to democratize access to the world of decentralized
              finance and make sophisticated crypto strategies available to everyone.
            </p>

            <p className="about-description">
              Our team of industry veterans brings decades of combined experience in traditional finance, blockchain
              technology, and cryptocurrency markets. We've helped thousands of clients navigate the complex DeFi
              landscape and achieve their financial goals.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div>
                  <h4>Proven Track Record</h4>
                  <p>5+ years of consistent performance in volatile crypto markets</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4>24/7 Support</h4>
                  <p>Round-the-clock assistance for all your crypto needs</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4>Industry Leaders</h4>
                  <p>Learn from experts who've navigated every market cycle</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-container">
              <div className="glow-orb glow-orb-1"></div>
              <div className="glow-orb glow-orb-2"></div>
              <div className="glow-orb glow-orb-3"></div>

              <div className="chart-container floating">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,100 L30,85 L50,70 L70,55 L90,40 L110,35 L130,25 L150,20 L170,15 L190,10"
                    stroke="url(#gradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00d4ff" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>

                  <circle cx="30" cy="85" r="4" fill="#00d4ff">
                    <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="90" cy="40" r="4" fill="#a855f7">
                    <animate attributeName="r" values="4;6;4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="170" cy="15" r="4" fill="#ec4899">
                    <animate attributeName="r" values="4;6;4" dur="2s" begin="1s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>

              <div className="info-badge badge-1">
                <div className="badge-content">
                  <span className="badge-label">APY</span>
                  <span className="badge-value gradient-text">245%</span>
                </div>
              </div>

              <div className="info-badge badge-2">
                <div className="badge-content">
                  <span className="badge-label">Users</span>
                  <span className="badge-value gradient-text">5,000+</span>
                </div>
              </div>

              <div className="info-badge badge-3">
                <div className="badge-content">
                  <span className="badge-label">TVL</span>
                  <span className="badge-value gradient-text">$50M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
