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

const HeadLink = ({href, children}) => <a style={{color:"white"}}  href={href} >{children}</a>

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
          height:"10em",
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          backgroundColor:"#2d2d2d",
          color:"white",
          textAlign:"center",
          marginBottom:"1.5em",
        }}
      >
        <section style={{paddingTop: "2em"}}>
          <h2 style={{ margin:"0px", textAlign:"center"}} > Fullstack software engineer. Javascript ninja. <span style={{whiteSpace: "nowrap"}} >Trying to be ...  <span style={{fontSize:"0.85em"}} >&frasl;&frasl;
TODO</span></span></h2>

          <p style={{paddingTop: "1.5em"}} > <HeadLink href="https://casual-programming.com/" >Blog</HeadLink> | <HeadLink href="https://github.com/jurgob" >Github</HeadLink></p>
        </section>
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
