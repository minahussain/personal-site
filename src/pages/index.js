import * as React from "react"
import Navbar from '../components/menus/navbar';
import Hero from '../components/sections/hero';
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
      <title>Mina Hussain</title>
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default IndexPage
