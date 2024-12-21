import React from 'react'
import Hero from './files/Hero'
import Trending from './files/Trending'
import MRTJ from './files/MRTJ'
import Footer from './files/Footer'
const App = () => {
  return (
    <>
      <div id='firstHead'>
        <Hero />
        <div id="fHPar">
          <Trending />
          <MRTJ />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
