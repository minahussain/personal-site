import * as React from "react"
import Navbar from '../components/menus/navbar';
import Socials from '../components/menus/socials';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';
import Footer from '../components/footer';
// Import from a CSS file in your src
import "../styles/main.scss"

// markup
const IndexPage = () => {
  return (
    <div className="main">
      <Navbar />
      <Socials />
      <title>Mina Hussain</title>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default IndexPage
