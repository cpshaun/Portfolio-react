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
    </>
  );
}

export default App;
