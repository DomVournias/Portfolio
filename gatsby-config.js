module.exports = {
  siteMetadata: {
    siteUrl: "https://domvournias.com",
    title: "Dom Vournias",
    description: "Dom's Portfolio",
    image: "/src/images/DomFav-512x512.png",
    author: "Dom Vournias",
    url: "https://domvournias.com",
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/DomFav-192x192.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/templates/Layout.js"),
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/blog/",
      },
      __key: "blog",
    },
  ],
};
