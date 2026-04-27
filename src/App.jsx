/**
 * Project Overview:
 * This is a React-based landing page application for a service-based business.
 * It showcases the company's services through key sections:
 *   - Header: Navigation and branding
 *   - Hero: Main value proposition and call-to-action
 *   - Process: Step-by-step breakdown of how the service works
 *   - Testimonials: Customer reviews and social proof
 *   - Contact: Contact form and company information
 *   - Footer: Additional links and copyright
 * 
 * Built with Vite + React, styled with CSS, and uses ESLint for code quality.
 */

import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
