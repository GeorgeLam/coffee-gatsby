import React from "react"
import { Link, graphql } from "gatsby"
import StoreStyles from "../styles/store.module.css"

const StoreCategories = ({ data }) => {
  console.log(data)


  const categories = [
    {name: "all", url: "./"},
    {name: "coffee", url: "./coffee"},
    {name: "food", url: "./food"},
    {name: "accessories", url: "./accessories"},
  ]

  return (
   <div className={StoreStyles.categories}>
    {categories.map(category => (
      <li className={StoreStyles.category}><Link to={`/store/${category.url}`}>{category.name}</Link></li>
    ))}
  </div>
  )
}

export default StoreCategories;

// export const query = graphql`
//   query Query {
//     allContentfulProduct{
//       group(field: category) {
//         fieldValue
//       }
//     }
//   }
// `

