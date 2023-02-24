module.exports = {
  siteMetadata: {
    siteUrl: "https://domvournias.dev",
    title: "Dom Vournias",
    description: "Dom's Portfolio",
    image: "/src/images/DomFav-512x512.png",
    author: "Dom Vournias",
    url: "https://domvournias.dev",
  },

  plugins: [
    "gatsby-plugin-minify",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-background-image-es5",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:[]",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",

    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx-prismjs",

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
      resolve: "gatsby-source-wordpress",
      options: {
        url: `https://portal.domvournias.dev/graphql`,
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
        name: "blogfeatured",
        path: "./src/images/blogimages/blogfeatured/",
      },
      __key: "blogfeatured",
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
        name: "blogposts",
        path: "./src/blogposts/",
      },
      __key: "blogposts",
    },
  ],
};
