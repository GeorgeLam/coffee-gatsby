const path = require("path")
const { useStaticQuery } = require("gatsby")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // console.log(JSON.stringify(node), undefined, 4)
    console.log("!!!!!!!!!!!!", slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPath = path.resolve("./src/pages/blogPost.js")

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // console.log(node)
    createPage({
      path: node.fields.slug,
      component: blogPath,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
