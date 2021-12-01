exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  );
  if (results.errors) {
    console.log("Error retrieving data", results.errors);
    return;
  }

  results.data.allContentfulBlog.edges.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: require.resolve("./src/components/templates/BlogPost.js"),
      context: {
        slug: post.node.slug,
      },
    });
  });
};
