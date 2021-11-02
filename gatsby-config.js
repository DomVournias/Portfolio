module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Portfolio",
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 300,
      },
    },

    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/templates/Layout.js"),
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mockups",
        path: "./src/images/mockups/",
      },
      __key: "mockups",
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "thumbs",
        path: "./src/images/thumbs/",
      },
      __key: "thumbs",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "featured",
        path: "./src/images/featured/",
      },
      __key: "featured",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects/",
      },
      __key: "projects",
    },
  ],
};
