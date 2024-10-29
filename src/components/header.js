import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaMapMarkerAlt, FaPhone, FaAt, FaLink , FaGithub} from 'react-icons/fa';


const contactIconStyle = {
  height: ".8em",
}
const Contacts = () => {
  const contactsList = [{
    value:"London, UK",
    name:<FaMapMarkerAlt  style={contactIconStyle} />
  },
    {
      value:"+447479199288",
      name:<FaPhone  style={contactIconStyle} />
    },
    {
      value:"jurgo.boemo@gmail.com",
      name:<FaAt  style={contactIconStyle} />,
    },
    {
      value:"https://jurgo.me",
      name:<FaLink  style={contactIconStyle} />,
    },
    {
      value:"https://casual-programming.com",
      name:<FaLink  style={contactIconStyle} />,
    },
    {
      value:"https://github.com/jurgob",
      name:<FaGithub  style={contactIconStyle} />,
    },

] 


  return (
    <div className="show_on_print" >
      {contactsList.map(({value, name}) => {
        return (
          <span key={name} style={{ fontSize:".8em", display:"inline-block", paddingRight: "15px" }}>
            <b >{name} </b><span className="text" > {value}</span>
          </span>
        )
      })}
  </div>
  )
}

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
    <section className="header-for-print-container">
          <div className="header-for-print" >
            <div className="header-for-print-image"  ><StaticImage src="../images/jurgo-icon.png" height="98" width="98" style={{borderRadius:"50px"}} /></div>
            <div className="header-for-print-texts"  >
              <h2 className="header-for-print-name">Jurgo Boemo </h2>
              <h3 className="header-for-print-jobtitle">Fullstack software engineer.</h3>
            </div>
          </div>
          <div  className="show_on_print" style={{padding: "5px 10px"}} ><Contacts /></div>

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
