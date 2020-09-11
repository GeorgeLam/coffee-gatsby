import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Lay from "../components/Lay"
import Image from "../components/image"
import SEO from "../components/seo"

import BlogStyles from "../styles/blog.module.css"

export default function BlogPost({ data }) {
  console.log(data)
  const post = data.contentfulContentfulBlogPost
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url}></img>
      },
    },
  }

  return (
    // {/* <SEO title="Home" /> */}
    // <h4>Blog post:</h4>
    // <h1>{post.title}</h1>
    // <p>{post.date}</p>
    // {documentToReactComponents(post.body.json, options)}
    // {/* <p dangerouslySetInnerHTML={{ __html: post.body.body }}></p> */}
    <Lay>
      <div className={BlogStyles.mainContain}>
        <section>
          <h1 className={BlogStyles.text}>{post.title}</h1>
          <h4>{post.date}</h4>
          <div className={BlogStyles.mainText}>
            {documentToReactComponents(post.body.json, options)}
          </div>
        </section>
      </div>
    </Lay>
  )
}

export const query = graphql`
  query($slug: String) {
    contentfulContentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM D, YYYY")
      body {
        json
      }
      slug
    }
  }
`
