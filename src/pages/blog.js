import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import BlogStyles from "../styles/blog.module.css"

const Blog = () => {
  //   const [postsData, setPostsData] = useState()

  let postsData = useStaticQuery(graphql`
    query {
      allContentfulContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          date(formatString: "MMMM D, YYYY")
          title
          slug
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
            postsData.allContentfulContentfulBlogPost.nodes.map(node => (
              <li key={node.title}>
                <h6>
                  <Link className="blogLink" to={"/" + node.slug}>
                    {" "}
                    {node.title}
                  </Link>
                </h6>
                <p>{node.date}</p>
              </li>
            ))}
        </ul>
      </Layout>
    </div>
  )
}

export default Blog
