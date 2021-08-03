module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "david-site",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    `gatsby-transformer-remark`,
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
