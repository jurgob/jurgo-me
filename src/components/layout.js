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
      <div>
        <section className="header-extension">
            <h2 className="header-extension-title" > Fullstack software engineer. <span style={{whiteSpace: "nowrap"}} >Trying to be ...  <span style={{fontSize:"0.85em"}} >&frasl;&frasl;
            TODO</span></span>

            <div className="header-extension-links" > <HeadLink href="https://casual-programming.com/" >Blog</HeadLink> | <HeadLink href="https://github.com/jurgob" >Github</HeadLink></div>
            </h2>
            
        </section>
        <div className="main-content" >
          <main>
            {children}
          </main>
          <footer className="footer">
            Updated on February, 2024
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
