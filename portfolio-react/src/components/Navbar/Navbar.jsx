import React, { useState } from 'react'
import { images } from '../../constants'
import { HiMenuAlt4, HiX, HiDocumentDownload } from 'react-icons/hi';
import { motion } from 'framer-motion'; 
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className= "app__navbar">
        {/* Logo */}
        <a href = "." className ="app__navbar-logo menu-link">
          <img src= {images.Shaun} alt = "Logo" />
        </a>
        {/* Navigation Content */}
        <ul className="app__navbar-links">
          {['about', 'experiences', 'work','contact'].map((item)=> (
            <li className = "app__flex p-text" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        <div className="app__navbar-resume">
          {/* <a href="https://www.linkedin.com/in/Chua-Peng-Shaun" target="_blank" rel="noreferrer" className="menu-link">
            <img src= {images.linkedin} alt="linkedin logo"/>
          </a>
          <a href="https://github.com/cpshaun" target="_blank" rel="noreferrer" className="menu-link">
            <img src= {images.github} alt="github logo"/>
          </a> */}
          <a href="Portfolio Site/portfolio-react/src/resume/Chua_Peng_Shaun_Resume.pdf" className="resume" download>
            {/* <img src={images.download} alt="download file icon"/> */}
            Resume
            <HiDocumentDownload />
          </a>
        </div>
        

        {/* Mobile Menu */}
        <div className="app__navbar-menu">
            <HiMenuAlt4 onClick = {() => setToggle(true)} />
            { toggle && (
                <motion.div 
                whileInView = {{ x: [300,0] }}
                transition = {{ duration: 0.85, ease: 'easeOut'}}
                >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['about', 'experiences', 'work','contact'].map((item)=> (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                  <li>
                    <a href="resume/Chua_Peng_Shaun_Resume.pdf" className="resume" download>
                      Resume
                      <HiDocumentDownload />
                    </a>
                  </li>
                </ul>
                </motion.div>
              )}
        </div>
        
    </nav>

  )
}

export default Navbar