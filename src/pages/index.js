import * as React from "react"
// import { Link } from "gatsby"
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
    <section style={{marginBottom:"2em", paddingBottom:"1em", borderBottom: "1px solid #ddd"}} >
      <h2 style={{marginBottom:"0.5em"}} >{title}</h2>
      <span>
        {children}
      </span>
    </section>
  );
}

const ResumeLine = ({title, desc, start, end})=> {
  return (
    <section style={{marginBottom:"0.9em"}} >
        <h5 style={{margin:"0px", marginBottom:"0.3em"}} >{title} - {start}, {end}</h5>
        <P>{desc}</P>
      </section>
  )
}

const ProjectLine = ({title,href, children})=> {
  return (
    <section style={{marginBottom:"0.5em"}} >
        <h5 style={{margin:"0px"}} ><A href={href}>{title}</A></h5>
        <P>{children}</P>
      </section>
  )
}


const F = React.Fragment
const P = ({children}) => <p style={{margin:"0px", lineHeight: "140%"}} >{children}</p>

const PageContent = ({children}) => (<div style={{fontSize:"0.9em"}} > {children} </div>)


const Socials = () => {
  
  const linkStyle = {
    marginRight: "12px",
    display:"inline-block",
    
  }
  
  const imgStyle = {
    borderRadius: "6px"
  }

  return (
    <p  style={{marginTop:"4px"}}>
       <a style={linkStyle} href="https://github.com/jurgob" ><StaticImage style={imgStyle} width="40" height="40" src="../images/github_icon.png" alt="." /></a>
       <a style={linkStyle} href="https://uk.linkedin.com/in/jurgo" ><StaticImage style={imgStyle} width="40" height="40" src="../images/linkedin_icon.png" alt="." /></a>
       <a style={linkStyle} href="https://twitter.com/UselessClown" ><StaticImage style={imgStyle} width="40" height="40" src="../images/twitter_icon.png" alt="." /></a>
       <a style={linkStyle} href="https://www.hackerearth.com/users/jurgo.boemo/" ><StaticImage style={imgStyle} width="40" height="40"  src="../images/hackerearth_icon.png" alt="." /></a>
       <a style={linkStyle} href="https://www.hackerrank.com/jurgo" ><StaticImage style={imgStyle} width="40" height="40"  src="../images/hackerrank_icon.png" alt="." /></a>
       <a style={linkStyle} href="https://www.facebook.com/jurgo.boemo" ><StaticImage style={imgStyle} width="40" height="40" src="../images/facebook_icon.png" alt="." /></a>
       <a style={linkStyle} href="https://medium.com/@jurgo.boemo" ><StaticImage style={imgStyle} width="40" height="40" src="../images/medium_icon.png" alt="." /></a>
    </p>
  )
}


const IndexPage = () => (
  <Layout>
      <Seo title="Home" />
      <PageContent>
        <Section title="About Me" >
          <F>
            <P>I work mainly with javascript since 2010 and I've ended up to be a team leader few times.</P>
            <P>Since 2016 I'm working as a <A href="https://nodejs.org/en/" >Node.js</A> backender / team leader realizing the <A href="https://www.vonage.co.uk/communications-apis/conversation/">Conversation API</A> at <A href="https://www.vonage.co.uk/" >Vonage</A>.</P>
            <P>So now It's all about Rest API, using db's like <A href="https://www.couchbase.com/">Couchbase</A> and pretending to understand WebRTC. </P>
            <P>In my previous job I mainly work as a frontend developer, but I've worked also as backender (using javascript platforms).</P>
            <P>Back then I was very interested in <A href="https://en.wikipedia.org/wiki/Isomorphic_JavaScript" >isomorphic javascript</A> and I'm really exited about <A href="https://reactjs.org/">Reactjs</A> framework and the <A href="https://facebook.github.io/flux/">Flux</A> approach.</P>
            <P>I also love to create web ui, fallowing <A href="https://en.wikipedia.org/wiki/Progressive_enhancement" >progressive enhancement strategy</A> and using the <A href="https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript">Javascript unobstrusive approach</A>. 
            Cross browser Approach was a must in my past work (I did websites who can be viewed from the <A href="https://www.gsmarena.com/blackberry_curve_8310-2050.php" >Blackbarry 8310</A> as from the Iphone).</P>
            <P>As I told for several years javascript was my main language, but in my "past live" I did some experience with Java and Python.</P>
          </F>
        </Section>
        
        <Section title="Resume" >
        <ResumeLine  
            title={<F>Team Leader at <A href="https://www.vonage.co.uk/communications-apis/campaigns/nexmo-is-now-vonage-apis" >Nexmo</A> (a <A href="https://www.vonage.co.uk/" >Vonage</A> company)</F>} 
            start=" Jannuary 2018"
            end="Present"
            desc={<F>I was Promoted Tecnical Team leader in order to lead the  <A href="https://developer.nexmo.com/conversation/overview" >Conversation API</A>  Team and the  <A href="https://developer.nexmo.com/client-sdk/overview"> Cliens SDKs </A> (JS | Android | iOS ).</F>}
          />
          <ResumeLine  
            title={<F>Node.js API developer at <A href="https://www.vonage.co.uk/communications-apis/campaigns/nexmo-is-now-vonage-apis" >Nexmo</A> (a <A href="https://www.vonage.co.uk/" >Vonage</A> company)</F>} 
            start=" November 2016"
            end="December 2017"
            desc={<F>I was Hired as a Node.js developer in order to work on the <A href="https://developer.nexmo.com/conversation/overview" >Conversation API</A>  And the <A href="https://developer.nexmo.com/sdk/stitch/javascript/index">Javascript Client SDK.</A></F>}
          />
          <ResumeLine  
            title={<F>Senior Front End Developer at <A href="https://www.crunchbase.com/organization/workdigital" >Workdigital</A> (a <A href="https://dhigroupinc.com/home/default.aspx" >DHI</A> company)</F>} 
            start="November 2014"
            end="November 2016"
            desc="I was Hired as Senior Frontend developer at Workdigital, a fast growing start up based in London."
          />
          <ResumeLine  
            title={<F>Fullstack Developer as Freelencer</F>} 
            start="Jannuary 2014"
            end="October 2014"
            desc="I've builded a geolocated chat called CityClub.tv as javascript full-stack developer using NodeJS, socket.io and AngularJS."
          />
          <ResumeLine  
            title={<F>Team Leader at <A href="https://usablenet.com/" >Usablenet</A></F>} 
            start="August 2010"
            end="May 2012"
            desc="As a team leader I've worked to balance the workload of a team of developers using. Despite this, every day I've carry out the normal duties of a coder, developing web interfaces for mobile devices using javascript, css, XHTML, HTML5 and XTML, paying particular attention to the browser interoperability. I've Developed also REST API using proprietary tools."
          />
          <ResumeLine  
            title={<F>Web Developer at <A href="https://usablenet.com/" >Usablenet</A></F>} 
            desc="As mobile web developer I've deployed mobile websites for big brand such Aetna and Carmax using a propetary platform based on XSLT and Javascript."
            start="May 2012"
            end="October 2014"
          />
          <ResumeLine  
            title={<F>Software Engineer at  <A href="https://github.com/digitalapesjam" >Digitalapes </A></F>} 
            desc={<F>I co-founded Digitalapes, a startup company dedicated to the development of a mobile geo-localized community for smart-phone users. My main responsibilities were the design and the development of web sites using <A href="http://www.gwtproject.org/overview.html" >GTW framework</A>, executing smoke tests and write <A href="https://wiki.osdev.org/GCC_Cross-Compiler" >cross-compiling for GCC compiler</A> guides.</F>}
            start="May 2012"
            end="October 2014"
          />
          <ResumeLine  
            title={<F>Python Web Developer as Contractor at <A href="https://www.uniud.it/en/uniud-international?set_language=en" >University of Udine</A></F>} 
            desc={<F>For my bachelord thesis I've helped to deploy an e-governament portal developed by the University of Udine for some little town on Friuli Venezia Giulia. After this, I've worked a little bit as contractor in order to fix bugs and fulfill change requests in the post sale phase. 
              Technologies involved in this project were <F href="https://plone.org/" >Plone</F> and <A href="https://www.zope.org/">Zope</A> </F>}
            start="July 2006"
            end="August 2006"
          />
        </Section>
        <Section title="My Projects" >
          <ProjectLine title="Conversation API functions" href="https://github.com/jurgob/conversation-api-function" >
            <F>A cli tool that will allow you to write simple application for the Vonage <A href="https://developer.nexmo.com/conversation">Conversation API</A> in your local env with minimal configuration. (I wrote an article about it <A href="https://casual-programming.com/an-easy-way-to-try-vonage-communication-api-locally/">here</A>) </F>
          </ProjectLine>
          <ProjectLine title="Conversation API Next.js Demo app monorepo" href="https://github.com/Vonage-Community/reference-client_sdk-ios-android-js-node-deno-usecases" >
            <F>A Turborepo-powered monorepo showcasing the Conversation API's capabilities through practical examples.</F>
          </ProjectLine>
          <ProjectLine title="JSQuest" href="https://jsquest.herokuapp.com/" >
            <F>An interactive way to learn js. Check the (very old) <A href="https://github.com/jurgob/js_questions">code</A> or <A  href="https://casual-programming.com/an_interactive_way_to_learn_javascript_jsquest/" >read about it</A> </F>
          </ProjectLine>
          <ProjectLine title="CityClub.tv" href="http://www.cityclub.tv/" >
            <F>Geolocated Chat writed with nodejs + Angularjs + socket.io. It works only on <A href="https://en.wikipedia.org/wiki/Udine" >Udine</A></F>
          </ProjectLine>
          <ProjectLine title="ImagesLazyLoading" href="https://github.com/jurgob/ImagesLazyLoading" >
            <F>ImageLoader writed with commonjs+jquery+Promise</F>
          </ProjectLine>
          <ProjectLine title="Win Mover Standalone" href="https://github.com/jurgob/win_mover_standalone" >
            <F>A Little utility to enable windows moving keyboard shortcuts on Mac OS.</F>
          </ProjectLine>
        </Section>
        
        <Section title="Projects I've Contributed To" >
          <ProjectLine title="Conversation API" href="https://developer.nexmo.com/api/conversation" >
            <F>The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video.</F>
          </ProjectLine>
          <ProjectLine title="Cliend SDK JS" href="https://developer.nexmo.com/sdk/stitch/javascript/index" >
            <F>Vonage Client SDK allows you to build Programmable Conversation applications.</F>
          </ProjectLine>
          <ProjectLine title="Itmediaonline" href="http://www.itmediaonline.com/" >
            <F>IT media online web site</F>
          </ProjectLine>
          <ProjectLine title="Statravel Mobile Booking" href="http://m.statravel.com/mt/book.statravel.co.uk/" >
            <F>Statravel Mobile Booking</F>
          </ProjectLine>
          <ProjectLine title="Cadoo" href="https://github.com/digitalapesjam/Cadoo" >
            <F>Cadoo was a game we did in 48 hours of straight code at the <A href="https://en.wikipedia.org/wiki/Nordic_Game_Jam">Nordic Game Jam</A> 2014</F>
          </ProjectLine>
        </Section>
        <Section title="Contact Me" >
          <b>Mail:</b>
          <P>jurgo.boemo at gmail.com</P>
          <b>Socials</b>
          <Socials/>
        </Section>
        <Section title="Read / Write" >
          <P>I keep a tech blog called <A href="https://casual-programming.com/" >Casual Programming</A>.</P>
          <P>I also mantain a Tech Reading List of articles I found interesting here: <A href="https://jurgoboemo.tumblr.com/" >jurgoboemo.tumblr.com</A>   </P>
          
        </Section>

        
      </PageContent>
  </Layout>
)

export default IndexPage
