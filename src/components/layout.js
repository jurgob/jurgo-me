/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div style={{backgroundColor:"#f9f9f9"}} >
      <section 
        style={{
          marginTop:"2.9em",
          height:"9em",
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          backgroundColor:"#2d2d2d",
          color:"white",
          textAlign:"center",
          marginBottom:"1.5em",
        }}
      >
        <h2 style={{ margin:"0px", textAlign:"center"}} > Fullstack software engineer. Javascript ninja. Trying to be ...  <span style={{fontSize:"0.85em"}} >//TODO</span></h2>
      </section>
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
          maxWidth: "980px"
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            fontSize:"0.8em"
          }}
        >
          Updated on August, 2021
        </footer>
      </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
