import React from "react"
import { Link, graphql } from "gatsby"
import StoreStyles from "../styles/store.module.css"
import { Helmet } from "react-helmet"


const StoreCategories = ({ data }) => {
  console.log(data)

    document.addEventListener('snipcart.ready', () => {
  // You can safely use window.Snipcart here
  console.log("asdjioo")
});
  

  const categories = [
    {name: "all", url: "./"},
    {name: "coffee", url: "./coffee"},
    {name: "food", url: "./food"},
    {name: "accessories", url: "./accessories"},
  ]

  return (
    <>
 
     <Helmet defer={false}>
        <title>Store - Better Latte Coffee</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css" />
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script async src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"></script>
        <div hidden id="snipcart" data-api-key="MzQ0OWMyOTUtNDY4YS00MzRiLTkxMmYtNDc5NGQ0MDYwN2FlNjM3MzgwOTU3MDE4ODgzNTE5"></div>
      </Helmet>

     
   <div className={StoreStyles.categories}>   
    {categories.map(category => (
      <li className={StoreStyles.category}><Link to={`/store/${category.url}`}>{category.name}</Link></li>
    ))}
    <a 
     style={{ marginLeft: "auto", fontWeight: 600, cursor: "pointer"}}
     onClick={() => {  window.Snipcart.api.theme.cart.open()}}
     >
       cart
      </a>
  </div>
  </>
  )
}

export default StoreCategories;

