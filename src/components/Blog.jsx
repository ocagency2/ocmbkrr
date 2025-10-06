import '../styles/Blog.css';

export default function Blog() {
  const blogPosts = [
    {
      title: "Airdrop Farming 101: Your Complete Beginner's Guide",
      excerpt: 'Learn what airdrop farming is, how it works, and proven strategies to maximize your free token allocations in the crypto space.',
      category: 'Airdrops',
      date: 'Jan 15, 2025',
      readTime: '8 min read'
    },
    {
      title: "Beginner's Guide to DeFi Safety and Security",
      excerpt: 'Essential security practices to protect your crypto assets in DeFi. Learn about wallet security, smart contract risks, and safe trading habits.',
      category: 'DeFi',
      date: 'Jan 10, 2025',
      readTime: '10 min read'
    },
    {
      title: 'How to Prepare for an Airdrop: Step-by-Step',
      excerpt: 'Position yourself for successful airdrop participation with our comprehensive preparation checklist and best practices.',
      category: 'Airdrops',
      date: 'Jan 5, 2025',
      readTime: '7 min read'
    },
    {
      title: 'Why a Crypto Mentorship Accelerates Your Success',
      excerpt: 'Discover how personalized crypto mentorship helps you avoid costly mistakes and fast-track your journey to financial independence.',
      category: 'Education',
      date: 'Dec 28, 2024',
      readTime: '6 min read'
    },
    {
      title: 'How CryptoBounty Mitigates Risk in Crypto Investing',
      excerpt: 'Learn about our proven risk management framework and how we help clients navigate the volatile crypto markets safely.',
      category: 'Strategy',
      date: 'Dec 20, 2024',
      readTime: '9 min read'
    },
    {
      title: 'The Future of DeFi for Retail Investors',
      excerpt: 'Explore upcoming trends in decentralized finance and how everyday investors can participate in the next wave of financial innovation.',
      category: 'DeFi',
      date: 'Dec 15, 2024',
      readTime: '11 min read'
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
