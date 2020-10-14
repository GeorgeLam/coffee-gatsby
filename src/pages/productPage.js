import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Helmet } from "react-helmet"

import StoreStyles from "../styles/store.module.css"
import StoreCategories from "../components/StoreCategories"


export default function Store({ data }) {
  console.log(data)
  const post = data.contentfulProduct
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

     <StoreCategories/>


     <section className={StoreStyles.productContainer}>
       <div className={StoreStyles.left}>
        <img className={StoreStyles.productImg} src={data.contentfulProduct.image.fluid.src}></img>
       </div>
       <div className={StoreStyles.right}>
  <h2>{data.contentfulProduct.productTitle}</h2>
  <p>{`£${data.contentfulProduct.price}`}</p>
  <p>{data.contentfulProduct.description.description}</p>
  <br/>
  <button
    class="snipcart-add-item"
    data-item-id={data.contentfulProduct.slug}
    data-item-price={  data.contentfulProduct.price}
    data-item-url={`/products/${data.contentfulProduct.slug}`}
    data-item-name={data.contentfulProduct.productTitle}
    data-item-image={data.contentfulProduct.image.fluid.src}
    data-item-description={data.contentfulProduct.description.description}
    style={{width: "50%", 
    margin: "0 auto"}}
  >
    Add to cart
  </button>
  </div>
</section>

</div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
  contentfulProduct(slug: {eq: $slug}) {
    description {
      description
    }
    price
    productTitle
    image {
      fluid(maxWidth: 500) {
        src
      }
    }
    slug
  }
}

`
