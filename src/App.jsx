import React from 'react'
import { useEffect } from 'react'
import Hero from './files/Hero'
import Trending from './files/Trending'
import MRTJ from './files/MRTJ'
import Footer from './files/Footer'
import './app.css'
import ben from './assets/img/ben.webp'
import sadBen from './assets/img/sadBen.webp'
const App = () => {
  useEffect(() => {
    let visitPort = document.getElementById('visitPort');
    let close = document.getElementById('close')
    let benImage = document.getElementById('benImage')
    let sVisitPort = document.getElementById('sVisitPort')

    sVisitPort.style.display = 'none'
    benImage.src = ben;
    visitPort.className = 'bouncy-slide';
    sVisitPort.addEventListener('click', () => {
      sVisitPort.style.display = 'none'
      benImage.src = ben;
      visitPort.className = 'bouncy-slide';
      console.log('bouncy')
    })
    close.addEventListener('click', () => {
      sVisitPort.style.display = 'flex'
      benImage.src = sadBen
      setTimeout(() => {
        visitPort.className = 'bouncy-slide-out';
      }, 1000);
    })
  }, []);
  return (
    <>
      <div id='firstHead'>
        <div id="sVisitPort">
          {'>'}
        </div>
        <div id="visitPort">
          <div id="imgVp"><img id='benImage' src={ben} alt="Image for portfolio" /></div>
          <div id="vpSec">
            <div id="visit">
              <span>Hi, I’m Bernard. Do you like my project? Why not explore my portfolio below?</span>
              <div id="parClose">
                <div id="close">X</div>
                <a id='linkTo' href="https://www.bernardekoli.xyz" target='_blank' rel="noreferrer">
                  <button>Visit Portfolio</button>
                </a>
              </div>
            </div>
          </div>
        </div>
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
