import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import MainStyles from "../styles/main.module.css"
// import "../styles/blog.module.css"

const Lay = ({ children }) => {
  return (
    <div className={MainStyles.allContent}>
      <div className={MainStyles.mainContent}>
        <nav>
          <div className={MainStyles.logo}>Coffee!</div>
          <div className={MainStyles.links}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>{children}</div>
      </div>

      <footer>
        <span>
          <a href="https://georgelam.dev">George Lam</a> - 2020
        </span>
      </footer>
    </div>
  )
}

Lay.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Lay
