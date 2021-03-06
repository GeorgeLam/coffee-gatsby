import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Helmet } from "react-helmet"

import Header from "./header"
import LayoutStyles from "../styles/layout.module.css"
// import "../styles/blog.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet title="Better Latte Coffee" defer={false} />

      <div className={LayoutStyles.allContent}>
        <div className={LayoutStyles.mainContent}>
          <nav>
            <div className={LayoutStyles.logo}><Link to="/">Better Latte</Link></div>
            <div className={LayoutStyles.links}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/store">Store</Link>
                </li>
              </ul>
            </div>
          </nav>
          <>{children}</>
        </div>

        <footer>
          <span>
            <a className={LayoutStyles.portfolio} href="https://georgelam.dev">
              George Lam
            </a>{" "}
            - 2020
          </span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
