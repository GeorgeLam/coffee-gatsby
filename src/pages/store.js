import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"
import Image from "../components/image"
import BuyButton from "../components/BuyButton"

import { Helmet } from "react-helmet"

import StoreStyles from "../styles/store.module.css"
import StoreCategories from "../components/StoreCategories"

export default function Store({ data }) {
  console.log(data)

//   document.addEventListener('snipcart.ready', () => {
//   // You can safely use window.Snipcart here
//   console.log("asdjioo")
// });

const Snipcart = window.Snipcart;


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
  
    <Layout>
      {/* <Helmet defer={false}>
        <title>Store - Better Latte Coffee</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css" />
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script async src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"></script>
        <div hidden id="snipcart" data-api-key="MzQ0OWMyOTUtNDY4YS00MzRiLTkxMmYtNDc5NGQ0MDYwN2FlNjM3MzgwOTU3MDE4ODgzNTE5"></div>
      </Helmet> */}

<div className={StoreStyles.container}>

<StoreCategories/>
  

<div className={StoreStyles.gridContainer}>

{data.allContentfulProduct.nodes.map(node => 
(
 <div key={node.slug} className={StoreStyles.product}>

  <div style={{flex: 1}}>
    <h2><Link to={`/store/${node.slug}`}>{node.productTitle}</Link></h2>
    <span>{`£${node.price}`}</span><br/>
  </div>

  <img className={StoreStyles.productThumbnail} src={node.image.fluid.src}></img>
  <br/>
  <BuyButton node={node}/>
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
