import { useState } from 'react'
import AddLink from "./components/AddLink"
import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CTA from './components/CTA'

function App() {

  return (
    <div className="App">
      <main>
        <Hero fill={'#34313D'}/>
        <AddLink />
      </main>
      <CTA />
      <Footer fill={'#ffffff'}/>
    </div>
  )
}

export default App
