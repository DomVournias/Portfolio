const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/about/)) {
    page.context.layout = "special";
    createPage(page);
  }

  if (page.path.match(/projects\/([^\/]+$)/)) {
    page.context.layout = "projectsPage";
    createPage(page);
  }

  if (page.path.match(/blog\/([^\/]+$)/)) {
    page.context.layout = "singlePost";
    createPage(page);
  }

  if (page.path.match(/thankyou/)) {
    page.context.layout = "thankyouPage";
    createPage(page);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      projects: allWpProject {
        edges {
          node {
            id
            project {
              slug
            }
          }
        }
      }
      posts: allMdx(filter: { fileAbsolutePath: { regex: "/(blogposts)/" } }) {
        edges {
          node {
            id
            slug
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const projectsTemplate = require.resolve(`./src/templates/project-details`);
  const postsTemplate = require.resolve("./src/templates/SinglePost");

  if (result.errors) {
    return;
  }

  result.data.projects.edges.forEach((edge) => {
    const id = edge.node.id;

    createPage({
      path: `/projects/${edge.node.project.slug}/`,
      component: projectsTemplate,
      context: {
        id,
        slug: edge.node.project.slug,
        layout: "projectsPage",
      },
    });
  });

  result.data.posts.edges.forEach((edge) => {
    // const postId = edge.node.id;
    createPage({
      component: postsTemplate,
      path: `/blog/${edge.node.frontmatter.slug}`,
      context: {
        id: edge.node.id,
        slug: edge.node.frontmatter.slug,
        layout: "singlePost",
      },
    });
  });
};
