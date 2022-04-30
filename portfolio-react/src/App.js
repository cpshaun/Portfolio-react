import './App.scss';
import {  About, Hero, Experiences, Work, Contact } from './container'
import { Navbar } from './components'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Hero />
        <About id="about"/>
        <Experiences />
        <Work/>
        <Contact />
      </div>
      <p className="copyright app__flex"> Built by Chua Peng Shaun. </p>
    </>
  );
}

export default App;
