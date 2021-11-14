const withPlugins = require('next-compose-plugins');

const config = {
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
};

module.exports = withPlugins([], config);
