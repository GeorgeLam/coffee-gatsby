import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

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
          }
          html
          excerpt
        }
      }
    }
  `)
  console.log(postsData)

  return (
    <div>
      <Layout>
        <h2 className={BlogStyles.text}>Recent blog posts</h2>
        <ul>
          {/* {postsData.allMarkdownRemark.nodes[0].frontmatter.title} */}
          {postsData &&
            postsData.allMarkdownRemark.nodes.map(node => (
              <li>
                <h6>{node.frontmatter.title}</h6>
                <p>{node.frontmatter.date}</p>
                <p dangerouslySetInnerHTML={{ __html: node.html }}></p>
              </li>
            ))}
        </ul>
      </Layout>
    </div>
  )
}

export default Blog
