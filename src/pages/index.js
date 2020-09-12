import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Layout from "../components/Layout"
import Map from "../components/Map"
import MainStyles from "../styles/main.module.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const myRef = useRef(null)
  const executeScroll = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const commentRef = useRef(null)

  const clearComment = e => {
    if (e) e.preventDefault()
    console.log("Clearing")
    nameRef.current.value = ""
    emailRef.current.value = ""
    commentRef.current.value = ""
  }

  const submitComment = e => {
    e.preventDefault()
    if (nameRef.current.value.length < 3) {
      alert("Please enter your name!")
      return
    }
    if (
      emailRef.current.value.length < 6 ||
      !emailRef.current.value.includes("@") ||
      !emailRef.current.value.includes(".")
    ) {
      alert("Please enter a valid email!")
      return
    }
    if (commentRef.current.value.length < 15) {
      alert("Please enter a longer comment!")
      return
    }
    console.log("Send clicked! ", nameRef.current.value)
    alert(`Thank you for your comments, ${nameRef.current.value}!`)
    clearComment()
  }

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

      allFile(filter: { relativeDirectory: { in: "gallery" } }) {
        nodes {
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <Layout>
      <div className={MainStyles.imageContainer}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ maxHeight: "calc(70vh)" }}
          imgStyle={{ objectFit: "cover", margin: 0 }}
        />
        <div className={MainStyles.heroText}>
          <div className={MainStyles.heroTextBox}>
            <h1>Coffee like no other</h1>
            <h2>Check out our new arrivals</h2>
            <div className={MainStyles.buttonDiv}>
              <button onClick={executeScroll}>Our Menu</button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h1 className={MainStyles.storyTitle}>Our Story</h1>
        <p className={MainStyles.storyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          molestie magna ut erat accumsan finibus. Ut id ipsum porttitor,
          ultrices sem eget, fringilla neque. Suspendisse malesuada sem vitae
          bibendum auctor.
        </p>

        <div className={MainStyles.photoGrid}>
          {data.allFile.nodes.map(node => (
            <Img
              fluid={node.childImageSharp.fluid}
              style={{ minHeight: "100%", minWidth: "100%" }}
              imgStyle={{ objectFit: "cover", margin: 0 }}
            />
          ))}
        </div>
      </section>

      <div>
        <div className={MainStyles.wrapper}>
          <div className={MainStyles.content}>
            <h1 className={MainStyles.menuTitle} ref={myRef} id="menu">
              Our Menu
            </h1>
            <div className={MainStyles.menuContainer}>
              <div className={MainStyles.menuLeft}>
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
                    <span className={MainStyles.menuItem}>Americano</span> -
                    £1.95
                  </li>
                </ul>
              </div>
              <div className={MainStyles.menuRight}>
                <ul>
                  <li>
                    <span className={MainStyles.menuItem}>Granola</span> - £5.95
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className={MainStyles.menuItem}>Avocado Toast</span> -
                    £24.15
                  </li>
                </ul>
                <ul>
                  <li>
                    <span className={MainStyles.menuItem}>
                      Scrambled Eggplant
                    </span>{" "}
                    - £8.95
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={MainStyles.backgroundShape}></div>
        </div>
      </div>

      <section>
        <h1>Find Us</h1>
        <div className={MainStyles.mapContainer}>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBg3enMEKqL5KGiCuAazG9_tyG8xWSSCE&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div style={{ height: `400px`, margin: "0 0 2em" }} />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
          <div className={MainStyles.location}>
            <p>
              <strong>Better Latte</strong>
            </p>
            <p>
              12 Bologna Street
              <br />
              Marylebone, <br />
              London, UK
            </p>
          </div>
        </div>

        <h1>Contact us!</h1>
        <form className={MainStyles.form}>
          <input type="text" placeholder="Your name..." ref={nameRef}></input>
          <input type="text" placeholder="Your email..." ref={emailRef}></input>
          <textarea placeholder="Your comments..." ref={commentRef}></textarea>
          <div className={MainStyles.buttons}>
            <button type="submit" onClick={clearComment}>
              Clear
            </button>
            <button type="submit" onClick={submitComment}>
              Send
            </button>
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default IndexPage
