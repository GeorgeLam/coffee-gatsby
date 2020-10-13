import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Helmet } from "react-helmet"

import StoreStyles from "../styles/store.module.css"

export default function Store({ data }) {
  console.log(data)

  const categories = [
    {name: "all", url: "./store"},
    {name: "coffee", url: "./coffee"},
    {name: "food", url: "./food"},
    {name: "accessories", url: "./accessories"},
  ]

  // const post = node
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
    <Layout>
        <Helmet defer={false}>
          <title>Store - Better Latte Coffee</title>
<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script async src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"></script>
<div hidden id="snipcart" data-api-key="MzQ0OWMyOTUtNDY4YS00MzRiLTkxMmYtNDc5NGQ0MDYwN2FlNjM3MzgwOTU3MDE4ODgzNTE5"></div>

        </Helmet>



<div className={StoreStyles.container}>

<div className={StoreStyles.categories}>
    {categories.map(category => (
      <li className={StoreStyles.category}><Link to={`/${category.url}`}>{category.name}</Link></li>
    ))}
</div>


<div class={StoreStyles.gridContainer}>

{data.allContentfulProduct.nodes.map(node => 
(
 <div className={StoreStyles.product}>
  <h2><a href={`./${node.slug}`}>{node.productTitle}</a></h2>
  <span>{`£${node.price}`}</span><br/>
  
  <img width="200" src={node.image.fluid.src}></img>
  <br/>
  <button
    class="snipcart-add-item"
    data-item-id={node.slug}
    data-item-price={node.price}
    data-item-url={`/products/${node.slug}`}
    data-item-name={node.productTitle}
    data-item-image={node.image.fluid.src}
    data-item-description={node.description.description}
  >
    Add to cart
  </button>
</div>
)
)}
</div>
</div>

    
    </Layout>
  )
}

export const query = graphql`
query ($category: String) {
  allContentfulProduct(filter: {node_locale: {eq: "en-US"}, category: {regex: $category}}) {
    nodes {
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
      category
    }
    group(field: category) {
      fieldValue
    }
  }
}

`
