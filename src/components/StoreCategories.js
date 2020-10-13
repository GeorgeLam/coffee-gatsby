import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"

const StoreCategories = ({ data }) => {
  console.log(data)

  return (
    <>
    <StaticQuery
    query={
      graphql`
  {
  allContentfulProduct {
    nodes {
      category
    }
  }
}

`
    }
        render={data => [...new Set(data.allContentfulProduct.nodes)].map(node => (
          <li>{node.category}</li>
        ))}

    />
    <ul>
  
    </ul>
    </>
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

