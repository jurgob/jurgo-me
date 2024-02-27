import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
const SKILLS = {
  JS : {name: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", rank: 10},
  TYPESCRIPT : {name: "Typescript", href: "https://www.typescriptlang.org/", rank: 10 },
  NODE : {name: "Node.js", href: "https://nodejs.org/en/", rank: 10 },
  REACT : {name: "React", href: "https://reactjs.org/",rank: 10 },
  REACT_NATIVE: {name: "React Native", href: "https://reactnative.dev/",rank: 10 },
  RUST: {name: "Rust", href: "https://www.rust-lang.org/",rank: 9 },
  AWS: {name: "AWS", href: "https://aws.amazon.com/" ,rank: 9},
  DOCKER: {name: "Docker", href: "https://www.docker.com/", rank: 8 },
  KUBERNETES: {name: "Kubernetes", href: "https://kubernetes.io/", rank: 8 },
  EXPO: {name: "Expo", href: "https://expo.dev",rank: 6 },
  DISTRIBUTED: {name: "Distributed Systems", href: "https://en.wikipedia.org/wiki/Distributed_computing", rank: 8 },
  NEXT: {name: "Next.js", href: "https://nextjs.org/" ,rank: 7},
  APIDESING: {name: "REST API Design", href: "https://en.wikipedia.org/wiki/REST", rank: 7 },
  WEBRTC: {name: "WebRTC", href: "https://webrtc.org/", rank: 6 },
  COUCHBASE : {name: "Couchbase", href: "https://www.couchbase.com/", rank: 6 },
  SOCKETIO: {name: "Socket.io", href: "https://socket.io/",rank: 6 },
  GOLANG: {name: "Golang", href: "https://golang.org/" ,rank: 4},
  POSTGRES: {name: "Postgres", href: "https://www.postgresql.org/", rank: 4 },
  NIGHTWATCH: {name: "Nightwatch.js", href: "https://nightwatchjs.org/", rank: 3 },
  GRAFANA: {name: "Grafana", href: "https://grafana.com/",rank: 3 },
  ELASTICSEARCH: {name: "Elasticsearch", href: "https://www.elastic.co/", rank: 3 },
  KIBANA: {name: "Kibana", href: "https://www.elastic.co/kibana", rank: 3 },
  PROMETHEUS: {name: "Prometheus", href: "https://prometheus.io/", rank: 3 },
  TURBO: {name: "TurboRepo", href: "https://turbo.build/" ,rank: 3},
  FLY: {name: "Fly.io", href: "https://fly.io/",rank: 3 },
  NOMAD: {name: "Nomad", href: "https://www.nomadproject.io/", rank: 3 },
  OPENAIAPI: {name: "OpenAI API", href: "https://beta.openai.com/" ,rank: 3},
  GOOGLETTS: {name: "Google TTS", href: "https://cloud.google.com/text-to-speech" ,rank: 3},
  GOOGLEASR: {name: "Google ASR", href: "https://cloud.google.com/speech-to-text" ,rank: 3},
  CSS: {name: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" ,rank: 3},
  JQUERY: {name: "Jquery", href: "https://jquery.com/", rank: 1 },
  
}

const Skl = ({skill}) => {
  const {name, href} = skill;
  return (<A href={href} >{name} </A>)
};


const A = ({href, children, style,className}) => {
  return (<a 
      style={{display:"inline-block", ...style}}
      className={className}
      href={href}
    >{children}</a>)
}

const Section = ({children, title, className}) => {
  return (
    <section className={"section "+className} >
      <h2 style={{marginBottom:"0.5em"}} >{title}</h2>
      <span>
        {children}
      </span>
    </section>
  );
}

const ResumeLine = ({className, title, desc, start, end})=> {

  let sep = start||end ? " - ": "";
  let sepStartEnd = end ? ", ": "";

  return (
    <section style={{marginBottom:"0.9em"}} className={className+" break_inside_avoid"} >
        <h5 style={{margin:"0px", marginBottom:"0.3em"}} >{title}{sep}{start}{sepStartEnd}{end}</h5>
        <P>{desc}</P>
      </section>
  )
}

const addBetween = (arr, add) => {
  const res = [];
  arr.forEach((el, i) => {
    res.push(el);
    if (i < arr.length - 1) {
      res.push(add);
    }
  });
  return res;
}

const ProjectLine = ({title,href, children, skills})=> {
  return (
    <section style={{marginBottom:"0.5em"}} className="break_inside_avoid" >
        <h5 style={{margin:"0.8em 0 0.2em 0"}} ><A href={href}>{title}</A></h5>
        <P>{children}</P>
        {skills && <div className="project-skills-line" >
          <span  >
            {addBetween(
              skills.map(skill => <span style={{margin:"0px", padding:"0"}} ><A  className="project_skill_label"  href={skill.href} >{skill.name}</A></span>),
              <span style={{margin:"0px", padding:"0 0.5em", fontSize: "0.9em"}} >|</span>
              )}
          </span>
        </div>
        }
          
      </section>
  )
}


const F = React.Fragment
const P = ({children}) => <p style={{margin:"0px", lineHeight: "140%"}} >{children}</p>

const ColumnCenter = ({children}) => (<div className="column-center"> {children} </div>)

const Skills = ({skills})=> {
  return (
    <div>
      {/* {skills[0].name} */}
      {skills.reduce((acc, {name, href},idx ) => {
        return acc.concat(<span className="skill_label"  key={name} >{name} </span>, idx < skills.length - 1 && <span  className="skill_sep" key={name+"sep"} > | </span>)
      }, [])}
    </div>
  )
}

const Socials = () => {
  
  const linkStyle = {
    marginRight: "12px",
    display:"inline-block", 
  }
  
  const imgStyle = {
    borderRadius: "6px"
  }

  return (
    <p  style={{margin:"4px 0"}}>
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
      <div className="column-left" >
      <Section title="Contacts" className="show_on_print" >
            {[
              {
                value:"+447479199288",
                name:"Phone"
              },
              {
                value:"jurgo.boemo@gmail.com",
                name:"Email",
              },
              {
                value:"https://jurgo.me",
                name:"Website",
              },
              {
                value:"https://casual-programming.com",
                name:"Blog",
              },
          ].map(({value, name}) => {
              return (
                <div key={name} className="line">
                  <b className="label" >{name}:</b><br />
                  <span className="text" >{value}</span>
                </div>
              )
            })}
        </Section>
        <Section title="Socials" className="show_on_print" >
            {[
              {
                href:"https://github.com/jurgob",
                name:"Github",
              },
              {
                href:"https://uk.linkedin.com/in/jurgo",
                name:"Linkedin",
              },
              {
                href:"https://twitter.com/UselessClown",
                name:"Twitter",
              },
          
          ].map(({href, name}) => {
              return (
                <div key={name} className="line">
                  <b className="label" >{name}:</b><br />
                  <span className="text" >{href}</span>
                </div>
              )
            })}
        </Section>
        <SectionLanguages className="show_on_print"  />
        <SectionSkills className="show_on_print" />
      </div>
      <ColumnCenter>
        <Section title="About Me" >
          <F>
             <P>I'm a full stack developer working mainly in <Skl skill={SKILLS.TYPESCRIPT} />, <Skl skill={SKILLS.RUST} /> and <Skl skill={SKILLS.GOLANG} />. I also know <Skl skill={SKILLS.REACT} /> and <Skl skill={SKILLS.REACT_NATIVE} />.</P>
            
            <P>I assumed the role of tech leader multiple times, consistently delving into the coding details of our projects and actively leveraging my expertise to ensure their success.</P>
            
            <P>I'm now working on a project called <A href="https://mytastytales.com">MyTastyTales</A> using <Skl skill={SKILLS.REACT_NATIVE} />, <Skl skill={SKILLS.NODE}/>, <Skl skill={SKILLS.POSTGRES} />, <Skl skill={SKILLS.DOCKER} /> and <Skl skill={SKILLS.FLY} />.</P>
            
            <P>I worked for 8 years at <A href="https://www.vonage.co.uk/" >Vonage</A> (part of <A href="https://www.ericsson.com/" >Ericsson</A>), 
            Developing the  <A href="https://www.vonage.co.uk/communications-apis/conversation/">Conversation API</A>  which is a SAAS software used by several prominent software companies. More specifically is a REST API providing a multichannel real-time communication.</P>
            <P>Working at the conversation API I've learned a lot about how to deal with microservices, distributed systems, real-time communication, multi master db's like <A href="https://www.couchbase.com/">Couchbase</A> and the <Skl skill={SKILLS.WEBRTC} /> standard.</P>
            <P>This also involved a deep involvement in the infrastructure management, using <Skl skill={SKILLS.AWS}/>, <Skl skill={SKILLS.NOMAD}/>, <Skl skill={SKILLS.KUBERNETES}/>,<Skl skill={SKILLS.DOCKER}/> and monitoring tools such as <Skl skill={SKILLS.GRAFANA}/>, <Skl skill={SKILLS.KIBANA}/>, <Skl skill={SKILLS.ELASTICSEARCH}/> and <Skl skill={SKILLS.PROMETHEUS}/>.</P>
            <P>I've also worked with <Skl skill={SKILLS.REACT} />.  A crucial aspect of my job is developing demo apps to showcase the potential of the Conversation API. 
            We typically do This with React.js and we have created the <A href="https://github.com/jurgob/reference-client_sdk-ios-android-js-node-deno-usecases/tree/main/packages/client-sdk-react" >Conversation API React SDK</A>.</P>
            <P>Over time, my fascination with <Skl skill={SKILLS.RUST} /> has deepened significantly. I've not only integrated it into our workplace 
            but also actively contributed to the <A href="https://github.com/webrtc-rs/webrtc">Webrtc.rs</A> project.</P>

            <P>I occasionally write about software-related topics in my tech blog, <A href="https://casual-programming.com/">Casual Programming</A>.</P>
            
            {/* <P>In my previous job, I primarily worked as a frontend developer, but I also worked as a backender (using JavaScript platforms). </P>
            
            <P>I'm interested in  <A href="https://en.wikipedia.org/wiki/Isomorphic_JavaScript" >isomorphic javascript</A> and I'm really exited about <A href="https://reactjs.org/">Reactjs</A> framework and the <A href="https://facebook.github.io/flux/">Flux</A> approach.</P>
            
            <P>I also love to create web ui, fallowing <A href="https://en.wikipedia.org/wiki/Progressive_enhancement" > progressive enhancement strategy</A> and using the <A href="https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript">Javascript unobstrusive approach</A>. 
            That's probably because accessibility, and interoperability with a wild range of browsers was a must in my past work (I did websites who can be viewed from the <A href="https://www.gsmarena.com/blackberry_curve_8310-2050.php" >Blackbarry 8310</A> as from the Iphone).
            </P>
            <P>As I told for several years javascript was my main language, but in my "past live" I did some experience with Java and Python.</P> */}
          </F>
        </Section>
        
        <Section title="Resume" >
          <ResumeLine  
            title={<F>Tech Leader at <A href="https://www.vonage.co.uk/" >Vonage</A> (part of <A href="https://www.ericsson.com/" >Ericsson</A>)</F>} 
            start=" Jannuary 2018"
            end="Jannuary 2024"
            desc={<F>
              I was promoted to Technical Team Leader to lead the team behind the <A href="https://developer.nexmo.com/conversation/overview" >Conversation API</A> and the <A href="https://developer.nexmo.com/client-sdk/overview"> Clients SDKs </A> (JS | Android | iOS ). <br />
              As a team leader, I spearheaded the design and execution of real-time communication solutions, scaled mission-critical databases, and designed REST APIs and SDKs, all within the context of a SAAS platform serving prominent software companies.<br />
              Given the unique nature of our business and customer base (our clients are developers), business decisions are intricately intertwined with architectural decisions and vice versa.<br />
              This required me to work very closely with the product team and be a key contributor to the  tech strategy and business direction of the project.<br />
              This role demanded close collaboration with various teams, including SRE (Site Reliability Engineering), Devrel (Developer Relations), Tech Support, and Presales.<br />
              As a team leader, I often extended my collaboration to working directly with our customers' development teams, pairing up to help them design and optimize their solutions.
              I Worked in a cross-functional team of 40 engineers, direclty leading 10 of them, working across the full SDLC. <br />
              I also Worked in an higly flexible Agile Kanban process, with a strong focus on continuous delivery and continuous improvement.
              <br /><b>Personal achievement:</b>
              <br /> - Designed and led the implementation of integrating the IM channels (SMS, Facebook, Whatsapp) with the Conversation API.
              <br /> - Designed and led the implementation of increasing the allowed participants in a conversation from 20 to 3000.
              <br /> - Fixed security vulnerabilities on both our Docker images and our Node.js code.
              <br /> - Participate in the Design and effort of the system migration from Cloudflare to <Skl skill={SKILLS.AWS} /> and <Skl skill={SKILLS.NOMAD} /> / <Skl skill={SKILLS.KUBERNETES} />.
              <br /> - Designed and implemented metrics and kibana dashboard used to monitor the api in order to reduce MTTR and MTTR during incidents.
              <br /> - Designed and led the implementation of the new Cross Platform SDK (JS | Android | iOS). Using a flux architecture. 
              <br /> - Designed and led the implementation of Cross Platform SDK Testing Strategy. 
              <br /> - Personally implemented several example application of how to use the Conversation API. 

            </F>}
          />
          <ResumeLine  
            title={<F>Node.js API developer at <A href="https://www.vonage.co.uk/communications-apis/campaigns/nexmo-is-now-vonage-apis" >Nexmo</A> (a <A href="https://www.vonage.co.uk/" >Vonage</A> company)</F>} 
            start=" November 2016"
            end="December 2017"
            desc={<F>
              I was Hired as a Node.js developer to work on the <A href="https://developer.nexmo.com/conversation/overview" >Conversation API</A>  And the <A href="https://developer.nexmo.com/sdk/stitch/javascript/index">Javascript Client SDK.</A>
              The api was a POC with some onboarded customers, I was the first senior developer working on it, and I was responsible for scaling the api.
              <br/><b>Personal achievement:</b>
              <br /> - introduced test driven development in the team. I wrote the first test and I lead the effort of moving the code coverage from 0 to 80%.
              <br /> - implemented the in-app voice feature on the backend. working very closely with the client SDK team and the voice experts.
              <br /> - implemented the designe and lead the effort of redusinng the response time of the api from 1.5s to 300ms.
              </F>}
          />
          <ResumeLine  
            title={<F>Senior Front End Developer at <A href="https://www.crunchbase.com/organization/workdigital" >Workdigital</A> (a <A href="https://dhigroupinc.com/home/default.aspx" >DHI</A> company)</F>} 
            start="November 2014"
            end="November 2016"
            desc={<F>
              I was Hired as Senior Frontend developer at Workdigital, a fast-growing start up based in London.
              <br /><b>Personal achievement:</b>
              <br /> - I've introduced <Skl skill={SKILLS.REACT} /> in the company, Implementing from scratch An internal portal.
              <br /> - I've designed and Implementing E2E tests inside the company using <Skl skill={SKILLS.NIGHTWATCH} />.
              </F>}
          />
          <ResumeLine  
            title={<F>Fullstack Developer as Freelencer</F>} 
            start="Jannuary 2014"
            end="October 2014"
            desc="I built a geolocated chat called CityClub.tv as a JavaScript full-stack developer using NodeJS, socket.io, and AngularJS."
          />
          <ResumeLine  
            title={<F>Team Leader at <A href="https://usablenet.com/" >Usablenet</A></F>} 
            start="August 2010"
            end="May 2012"
            desc="As a team leader, I balanced the workload of a team of developers. Despite this, I carried out the normal duties of a coder, developing web interfaces for mobile devices using JavaScript, CSS, XHTML, HTML5, and XTML, paying particular attention to browser interoperability. I also developed REST APIs using proprietary tools."
          />
          <ResumeLine  
            title={<F>Web Developer at <A href="https://usablenet.com/" >Usablenet</A></F>} 
            desc="As a mobile web developer, I deployed mobile websites for big brands such as Aetna and Carmax using a proprietary platform based on XSLT and JavaScript."
            start="May 2012"
            end="October 2014"
          />
          <ResumeLine  
            title={<F>Software Engineer at  <A href="https://github.com/digitalapesjam" >Digitalapes </A></F>} 
            desc={<F>I co-founded Digitalapes, a startup company dedicated to the development of a mobile geo-localized community for smart-phone users. My main responsibilities were the design and the development of websites using <A href="http://www.gwtproject.org/overview.html" >GTW framework</A>, executing smoke tests and writing <A href="https://wiki.osdev.org/GCC_Cross-Compiler" >cross-compiling for GCC compiler</A> guides.</F>}
            start="May 2012"
            end="October 2014"
          />
          <ResumeLine  
            title={<F>Python Web Developer as Contractor at <A href="https://www.uniud.it/en/uniud-international?set_language=en" >University of Udine</A></F>} 
            desc={<F>For my bachelor thesis I've helped to deploy an e-government portal developed by the University of Udine for some little town on Friuli Venezia Giulia. After this, I've worked a little bit as contractor in order to fix bugs and fulfil change requests in the post sale phase. 
              Technologies involved in this project were <F href="https://plone.org/" >Plone</F> and <A href="https://www.zope.org/">Zope</A> </F>}
            start="July 2006"
            end="August 2006"
          />
        </Section>
        <Section title="My Projects" className="break_inside_avoid" >
          <ProjectLine title="Conversation API functions" href="https://github.com/jurgob/conversation-api-function" skills={[SKILLS.JS, SKILLS.NODE]} >
            <F>A cli tool that will allow you to write simple application for the Vonage <A href="https://developer.nexmo.com/conversation">Conversation API</A> in your local env with minimal configuration. (I wrote an article about it <A href="https://casual-programming.com/an-easy-way-to-try-vonage-communication-api-locally/">here</A>) </F>
          </ProjectLine>
          <ProjectLine title="JSQuest" href="https://jsquest.io/" skills={[SKILLS.JS, SKILLS.REACT]} >
            <F>An interactive way to learn js. Check the (very old) <A href="https://github.com/jurgob/js_questions">code</A> or <A  href="https://casual-programming.com/an_interactive_way_to_learn_javascript_jsquest/" >read about it</A> </F>
          </ProjectLine>
          <ProjectLine title="ImagesLazyLoading" href="https://github.com/jurgob/ImagesLazyLoading" skills={[SKILLS.JS]} >
            <F>ImageLoader writed with commonjs+jquery+Promise</F>
          </ProjectLine>
          <ProjectLine title="Win Mover Standalone" href="https://github.com/jurgob/win_mover_standalone" >
            <F>A Little utility to enable windows moving keyboard shortcuts on Mac OS.</F>
          </ProjectLine>
        </Section>
        
        <Section title="Projects I've Contributed To" >
          <ProjectLine title="Conversation API" href="https://developer.nexmo.com/api/conversation" 
            skills={[SKILLS.JS,SKILLS.NODE, SKILLS.COUCHBASE, SKILLS.SOCKETIO, SKILLS.DISTRIBUTED, SKILLS.WEBRTC]} 
          >
            <F>The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video.</F>
          </ProjectLine>
          <ProjectLine title="Client SDK JS" href="https://developer.nexmo.com/sdk/stitch/javascript/index" 
            skills={[SKILLS.TYPESCRIPT, SKILLS.SOCKETIO, SKILLS.WEBRTC]} 
          >
            <F>Vonage Client SDK allows you to build Programmable Conversation applications.</F>
          </ProjectLine>
          <ProjectLine title="A Contact Center example app" href="https://github.com/jurgob/reference-client_sdk-ios-android-js-node-deno-usecases/tree/main/contact-center" 
            skills={[SKILLS.TYPESCRIPT, SKILLS.NODE, SKILLS.NEXT, SKILLS.TURBO]} 
          >
            <F>An example of how to implement a very simple contact center. Customer would interract with it via SMS or facebook page, agents would respond using the browser</F>
          </ProjectLine>
          <ProjectLine title="A Multichannel chat app" href="https://github.com/jurgob/reference-client_sdk-ios-android-js-node-deno-usecases/tree/main/multichannel-app" 
            skills={[SKILLS.TYPESCRIPT, SKILLS.NODE, SKILLS.NEXT, SKILLS.TURBO, SKILLS.GOOGLEASR, SKILLS.GOOGLETTS, SKILLS.OPENAIAPI, SKILLS.FLY]}
          >
            <F>A DYI slack like app, where you can use inapp voice, pstn voice, chat, facebook message, whatsapp and sms. You can also "talk" with openai </F>
          </ProjectLine>
          <ProjectLine title="Conversation API React SDK (experimental)" href="https://github.com/jurgob/reference-client_sdk-ios-android-js-node-deno-usecases/tree/main/packages/client-sdk-react" 
            skills={[SKILLS.TYPESCRIPT, SKILLS.REACT]}
          >
            <F>An experimental Conversation API React SDK. It's a set of React widget and tools that allows customers to quickly Integrate chat and voice in their applications.</F>
          </ProjectLine>
          
          <ProjectLine title="Cadoo" href="https://github.com/digitalapesjam/Cadoo"  skills={[SKILLS.JS]} >
            <F>Cadoo was a game we did in 48 hours of straight code at the <A href="https://en.wikipedia.org/wiki/Nordic_Game_Jam">Nordic Game Jam</A> 2014</F>
          </ProjectLine>
        </Section>
        <Section title="Education" >
        <ResumeLine  
            title={<F>Bachelor's degree in Computer Science, Web Information Technologies at <A href="https://www.linkedin.com/school/universit%C3%A0-degli-studi-di-udine" >Università degli Studi di Udine </A> </F>} 
            start=" 2002"
            end="2006"
            desc={<F>I studied Computer Science, the curriculum I chose was Web Information Technology. My thesis made me implement a web e-government portal using <A href="https://www.python.org/" >Python</A>, <A href="https://plone.org/" >Plone</A> and <A href="https://www.zope.org/">Zope</A></F>}
          />
        </Section>
        <SectionLanguages className="hide_on_print"  />
        <SectionSkills className="hide_on_print" />
        <Section title="Contact Me" className="hide_on_print" >
          <b>Mail:</b> <span>jurgo.boemo at gmail.com</span>
          <br />
          <b>Socials</b>
          <Socials/>
          <b>Read / Write</b>
          <P>I keep a tech blog called <A href="https://casual-programming.com/" >Casual Programming</A>.</P>
          <P>I also maintain a Tech Reading List of articles I found interesting here: <A href="https://jurgoboemo.tumblr.com/" >jurgoboemo.tumblr.com</A>   </P>
        </Section>

        
      </ColumnCenter>
  </Layout>
)

const SectionLanguages = ({className}) => (<Section title="Languages" className={className} >
<ResumeLine 
  desc={<F>
    <div>
      <div className="line" ><b>Italian</b><span> - Native or bilingual proficiency</span></div>
      <div className="line" ><b>Friulan</b><span> - Native or bilingual proficiency</span></div>
      <div className="line"><b>English</b><span>  - Professional working proficiency</span></div>
    </div>   
    </F>}
/>
</Section>)

const SectionSkills = ({className}) => (<Section className={className} title="Skills" >
<ResumeLine  
  
  desc={<F>
      <Skills skills={Object.values(SKILLS).filter(s => s.rank > 3).sort((a,b)=> b.rank - a.rank)} />
    </F>}
/>
</Section>)

export default IndexPage
