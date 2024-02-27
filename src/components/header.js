import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <>
    <header className="header" >
      <div className="header__inner" >
        <h1 style={{ margin: 0, fontSize:"1.5em",fontWeight:"500" }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              verticalAlign: "middle",
              lineHeight:"120%"
            }}
          >
            <StaticImage src="../images/jurgo-icon.png" height="38" width="38"/> <div style={{display:"inline-block", marginTop:"8px"}} >{siteTitle}</div>
          </Link>
        </h1>
      </div>
    </header>
    <section className="header-for-print">
          <div className="header-for-print-image"  ><StaticImage src="../images/jurgo-icon.png" height="98" width="98" style={{borderRadius:"50px"}} /></div>
          <div className="header-for-print-texts"  >
            <h2 className="header-for-print-name">Jurgo Boemo </h2>
            <h3 className="header-for-print-jobtitle">Fullstack software engineer.</h3>
          </div>
          
      </section>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
