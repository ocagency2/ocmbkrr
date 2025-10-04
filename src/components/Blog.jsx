import '../styles/Blog.css';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Understanding DeFi Yield Farming in 2024',
      excerpt: 'Learn the fundamentals of yield farming and how to maximize your returns in decentralized finance protocols.',
      category: 'DeFi',
      date: 'Mar 15, 2024',
      readTime: '8 min read'
    },
    {
      title: 'Top 10 Upcoming Airdrops to Watch',
      excerpt: 'Discover the most promising upcoming airdrops and how to position yourself to maximize your allocation.',
      category: 'Airdrops',
      date: 'Mar 12, 2024',
      readTime: '6 min read'
    },
    {
      title: 'Risk Management Strategies for Crypto Investors',
      excerpt: 'Essential risk management techniques every crypto investor needs to know to protect their portfolio.',
      category: 'Trading',
      date: 'Mar 8, 2024',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="blog" className="blog section">
      <div className="blog-content">
        <div className="section-header">
          <span className="section-tag">BLOG</span>
          <h2 className="section-title">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="section-description">
            Stay updated with the latest trends, strategies, and opportunities in the crypto space.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="blog-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <div className="blog-footer">
                <span className="read-time">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {post.readTime}
                </span>
                <button className="read-more">
                  Read More
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <button className="btn-primary">View All Articles</button>
        </div>
      </div>
    </section>
  );
}
