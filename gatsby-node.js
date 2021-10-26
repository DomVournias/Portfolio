const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/about/)) {
    page.context.layout = "special";
    createPage(page);
  }

  if (page.path.match(/projects/)) {
    page.context.layout = "projectsPage";
    createPage(page);
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    actions.createPage({
      path: "/projects/" + slug,
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: slug },
    });
  });
};
