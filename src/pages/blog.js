import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import BlogStyles from "../styles/blog.module.css"

const Blog = () => {
  //   const [postsData, setPostsData] = useState()

  let postsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            date
            title
            slug
          }
          html
          excerpt
        }
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
  console.log(postsData)

  //   console.log(testP)

  return (
    <div>
      <Layout>
        <h2 className={BlogStyles.text}>Recent blog posts</h2>
        <ul>
          {/* {postsData.allMarkdownRemark.nodes[0].frontmatter.title} */}
          {postsData &&
            postsData.allMarkdownRemark.nodes.map(node => (
              <li key={node.frontmatter.slug}>
                <h6>
                  <Link className="blogLink" to={"/" + node.frontmatter.slug}>
                    {" "}
                    {node.frontmatter.title}
                  </Link>
                </h6>
                <p>{node.frontmatter.date}</p>
              </li>
            ))}
        </ul>
      </Layout>
    </div>
  )
}

export default Blog
