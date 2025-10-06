import { useEffect } from 'react';

export default function SEO({
  title = 'CryptoBounty — Consumer DeFi Mentorship & Airdrop Farming | teamcryptodrop.com',
  description = 'The world\'s first consumer-oriented DeFi company. Get expert crypto mentorship, airdrop farming services, and decentralized finance education.',
  url = 'https://teamcryptodrop.com',
  image = 'https://teamcryptodrop.com/og-image.jpg'
}) {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CryptoBounty',
      alternateName: 'TeamCryptoDrop',
      url: 'https://teamcryptodrop.com',
      logo: 'https://teamcryptodrop.com/logo.png',
      description: 'The world\'s first consumer-oriented DeFi company specializing in crypto mentorship and airdrop farming.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@teamcryptodrop.com',
        contactType: 'Customer Service'
      },
      sameAs: [
        'https://twitter.com/cryptobounty',
        'https://t.me/cryptobounty'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Crypto Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '1-Year Mentorship',
              description: 'Comprehensive year-long mentorship covering crypto trading, DeFi strategies, and portfolio management.',
              provider: {
                '@type': 'Organization',
                name: 'CryptoBounty'
              }
            },
            price: '500',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Info Call',
              description: 'Initial consultation call to discuss your crypto goals.',
              provider: {
                '@type': 'Organization',
                name: 'CryptoBounty'
              }
            },
            price: '25',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          }
        ]
      }
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(ldJson);
  }, [title, description, url, image]);

  return null;
}
