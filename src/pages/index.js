import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/Layout"
import MainStyles from "../styles/main.module.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cafe.jpg" }) {
        childImageSharp {
          resolutions {
            height
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className={MainStyles.imageContainer}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ maxHeight: "calc(50vh - 4rem)" }}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>

      <section>
        <h2>Our Menu</h2>
        <ul>
          <li>
            <span className={MainStyles.menuItem}>Latte</span> - £3.95
          </li>
        </ul>
        <ul>
          <li>
            <span className={MainStyles.menuItem}>Mocha</span> - £4.15
          </li>
        </ul>
        <ul>
          <li>
            <span className={MainStyles.menuItem}>Americano</span> - £1.95
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage
