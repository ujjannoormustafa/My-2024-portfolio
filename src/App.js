import React from 'react'
import Header from './componets/header/Header'
import Nav from './componets/nav/Nav'
import About from './componets/about/About'
import Experience from './componets/experience/Experience'
import Services from './componets/services/Services'
import Portfolio from './componets/portfolio/Portfolio'
import Contact from './componets/contact/Contact'
import Footer from './componets/footer/Footer'
import Headerbar from "./componets/navbar/Headerbar";
import About2 from "./about2/About2";
import Skills from "./componets/skills/Skills";
import CallActionBanner from "./componets/CallToAction/CallActionBanner";





const App = () => {
  return (
    <>
      <Headerbar />
      <Header />
      {/* <Nav /> */}
      <About />
      {/*<About2/>*/}
      <Experience />
      <Services />
      <Skills />
      <Portfolio />
      {/*<Testimonials />*/}
      <CallActionBanner />
      <Contact />
      <Footer />
    </>
  )
}

export default App