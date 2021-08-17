import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#202020`,
      marginBottom: `1.45rem`,
      position:"absolute",
      top:"0px",
      width:"100%"
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5em`,
      }}
    >
      <h1 style={{ margin: 0, fontSize:"1.5em",fontWeight:"500" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
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
