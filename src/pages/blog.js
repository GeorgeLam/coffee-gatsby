import React, { useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Truncate from "react-truncate"

// import Layout from "../components/layout"
import BlogStyles from "../styles/blog.module.css"
import Layout from "../components/Layout"

const Blog = () => {
  const [skipping, setSkipping] = useState(0)

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url}></img>
      },
    },
  }

  let postsData = useStaticQuery(graphql`
    {
      allContentfulContentfulBlogPost(
        sort: { fields: date, order: DESC }
        filter: { node_locale: { eq: "en-US" } }
      ) {
        nodes {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          childContentfulContentfulBlogPostBodyRichTextNode {
            json
          }
        }
        totalCount
      }
    }
  `)
  // console.log(postsData)
  console.log(postsData)
  // console.log(postsData.allContentfulContentfulBlogPost.nodes.map(node=> {
  //   if node.childContentfulContentfulBlogPostBodyRichTextNode.json.content
  // }))
  let totalCount = postsData.allContentfulContentfulBlogPost.totalCount
  const earlierPosts = e => {
    e.preventDefault()
    console.log("click", skipping)
    if (skipping < totalCount - 3) setSkipping(skipping + 3)
  }

  const laterPosts = e => {
    e.preventDefault()
    console.log("click")
    if (skipping > 0) setSkipping(skipping - 3)
  }

  return (
    <Layout>
      <div className={BlogStyles.mainContain}>
        <section>
          <h1 className={BlogStyles.text}>Recent blog posts</h1>
          <p className={BlogStyles.postCount}>
            Displaying {skipping + 1}-
            {skipping + 3 > totalCount ? totalCount : skipping + 3} of{" "}
            {totalCount} posts
          </p>
          <ul className={BlogStyles.gridContainer}>
            {postsData.allContentfulContentfulBlogPost.nodes
              .slice(skipping, skipping + 3)
              .map(node => (
                <li key={node.title}>
                  <h2>
                    <Link className="blogLink" to={"/" + node.slug}>
                      {" "}
                      {node.title}
                    </Link>
                  </h2>
                  <p className={BlogStyles.dateLine}>{node.date}</p>
                  <Truncate lines={3} width={500} ellipsis="&hellip;">
                    {documentToReactComponents(
                      node.childContentfulContentfulBlogPostBodyRichTextNode
                        .json
                    )}
                  </Truncate>
                </li>
              ))}
          </ul>
        </section>
        <div className={BlogStyles.postNav}>
          {skipping < totalCount - 3 && (
            <span>
              <a className={BlogStyles.postNav} onClick={earlierPosts} href="">
                earlier posts...
              </a>
            </span>
          )}
          {skipping > 0 && (
            <span>
              <a onClick={laterPosts} href="">
                later posts...
              </a>
            </span>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
