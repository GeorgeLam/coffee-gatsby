import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import BuyButton from "../components/BuyButton"

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

  <BuyButton node={data.contentfulProduct}/>

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
