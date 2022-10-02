module.exports = {
  siteMetadata: {
    title: `Gatsby Test 2`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `My second Gatsby tester`,
    twitterUsername: `@gatsbyjs`,
    image: `/img/gatsby-icon.png`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
