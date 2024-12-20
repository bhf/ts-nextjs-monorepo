module.exports = {
  /**
   * You can use the following experimental flag if you're on Next >= 10.1.0.
   * This will become the default eventually.
   *
   * @see https://github.com/vercel/next.js/discussions/26420#discussioncomment-6568785
   * @see https://github.com/vercel/next.js/pull/22867
   */
  experimental: {
    externalDir: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
