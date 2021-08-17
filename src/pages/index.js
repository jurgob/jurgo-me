import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const A = ({href, children}) => {
  return (
    <a 
      style={{
        color:"#c05b4d",
        textDecoration:"none"
      }}
      href={href}
    >{children}</a>
  )
}

const Section = ({children, title}) => {
  return (
    <section>
      <h2>{title}</h2>
      <span>
        {children}
      </span>
    </section>
  );
}

const ResumeLine = ({title, desc, start, end})=> {
  return (
    <section>
        <h5>{title} - {start}, {end}</h5>
        <p>{desc}</p>
      </section>
  )
}

const F = React.Fragment

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Section title="About Me" >
      <span>
      <p>I'm a quite experienced javascript programer with a past as team leader.</p>
      <p>In my current job I mainly work as a frontend developer, but I've worked also as backender (using javascript platforms).</p>
      <p>Recently I'm interested in isomorphic javascript and I'm really exited about Reactjs framework and the Flux approach.</p>
      <p>I also love to create web ui, fallowing progressive enhancement strategy and using the Javascript unobstrusive approach. Cross browser Approach was a must in my past work (I did websites who can be viewed from the Blackbarry 8310 as from the Iphone).</p>
      <p>I spent my last 5 years mainly developing with javascript, but in my "past live" I did some experience with Java and Python.</p>
      </span>
    </Section>
    
    <section>
    </section>
    
    <section>
      <h2>Resume</h2>
      <ResumeLine  
        title={<F>Senior Front End Developer at <A href="https://www.crunchbase.com/organization/workdigital" >Workdigital</A> (a <A href="https://dhigroupinc.com/home/default.aspx" >DHI</A> company)</F>} 
        desc="I was Hired as Senior Frontend developer at Workdigital, a fast growing start up based in London."
        start=" November 2014"
        end="Present"
      />
      <ResumeLine  
        title={<F>Fullstack Developer as Freelencer</F>} 
        desc="I've builded a geolocated chat called CityClub.tv as javascript full-stack developer using NodeJS, socket.io and AngularJS."
        start="Jannuary 2014"
        end="October 2014"
      />
      <ResumeLine  
        title={<F>Team Leader at Usablenet</F>} 
        desc="As a team leader I've worked to balance the workload of a team of developers using. Despite this, every day I've carry out the normal duties of a coder, developing web interfaces for mobile devices using javascript, css, XHTML, HTML5 and XTML, paying particular attention to the browser interoperability. I've Developed also REST API using proprietary tools."
        start="May 2012"
        end="October 2014"
      />
    <p>
  
    </p>
    </section>
  </Layout>
)

export default IndexPage
