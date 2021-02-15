module.exports = {
  images: {
    domains: ['assets.eskwelabs.com'],
  },
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ds-bootcamp',
        destination: '/data-science-fellowship',
        permanent: true,
      },
      {
        source: '/:slug.html',
        destination: '/slug',
        permanent: true,
      },
      {
        source: '/blog/:slug.html',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};
