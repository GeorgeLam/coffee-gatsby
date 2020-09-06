import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <h4>Blog post:</h4>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p dangerouslySetInnerHTML={{ __html: post.html }}></p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
