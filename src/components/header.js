import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#202020`,
      marginBottom: `1.45rem`,
      position:"fixed",
      top:"0px",
      width:"100%"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.3em 0.5em 0.5em 0.5em`,
        maxWidth: "980px"
      }}
    >
      <h1 style={{ margin: 0, fontSize:"1.5em",fontWeight:"500" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            verticalAlign: "middle",
            lineHeight:"100%"
          }}
        >
           <StaticImage src="../images/jurgo-icon.png" height="38" width="38"/> <div style={{display:"inline-block", marginTop:"8px"}} >{siteTitle}</div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
