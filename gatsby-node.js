const path = require("path")

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

  const blogPath = path.resolve("./src/pages/blog.js")
  const res = await graphql(query`
        allMarkdownRemark{
            node{
                fields{
                    slug
                }
            }
        }
    `)
}
