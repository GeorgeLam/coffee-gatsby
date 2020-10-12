const path = require("path")
const { useStaticQuery } = require("gatsby")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//     // console.log(JSON.stringify(node), undefined, 4)
//     console.log("!!!!!!!!!!!!", slug)
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPath = path.resolve("./src/pages/blogPost.js")
  const storePath = path.resolve("./src/pages/productPage.js")

  const res = await graphql(`
    query   {
      allContentfulProduct(
            filter: { node_locale: { eq: "en-US" } }
  ) {
        edges{
      node{
        description {
          description
        }
        price
        productTitle
        image {
          id
          fluid(maxWidth: 500) {
            src
          }
        }
        slug
      }
    }
      }
      allContentfulContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        edges {
          node {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            body {
              body
            }
          }
        }
      }
    }
  `)


   res.data.allContentfulProduct.edges.forEach(({ node }) => {
    // console.log("!!!!!!!!!!", node)
    createPage({
      path: node.slug,
      component: storePath,
      context: {
        slug: node.slug,
      },
    })
  })

  res.data.allContentfulContentfulBlogPost.edges.forEach(({ node }) => {
    // console.log("!!!!!!!!!!", node)
    createPage({
      path: node.slug,
      component: blogPath,
      context: {
        slug: node.slug,
      },
    })
  })
}
