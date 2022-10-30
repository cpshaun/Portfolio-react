import React from 'react'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import { FaLaptopCode } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'

import { AppWrap } from '../../wrapper/index';
import './About.scss'

const About = () => {
  return (
    <>
      <motion.div
      whileInView ={{y: [100,0],opacity: [0,1]}}
      transition={{ duration: 0}}
      className="app__about-header"
      >
        <h1>About</h1>
      </motion.div>
      <div className="app__about">
        <div className="app__about-container">
          <motion.img 
          whileInView ={{y: [100,0],opacity: [0,1]}}
          transition={{ duration: 0.8}}
          className = "display-picture"
          src={images.displaypic} 
          alt="display picture" />
          <motion.div 
          whileInView ={{y: [100,0],opacity: [0,1]}}
          transition={{ duration: 0.8}}
          className="app__about-text">
            <h1>Chua Peng Shaun</h1>
            <p>
              Aspiring Web Developer <strong>(Frontend / UI/UX)</strong> 
            </p>
          </motion.div>
        </div>
        <div className="app__about-bio">
          <motion.div
          whileInView ={{y: [100,0],opacity: [0,1]}}
          transition={{ duration: 0.5}}
          className="app__about-bioText"
          >
            <p>Hi! I'm Shaun. I'm currently a Final Year Student under Nanyang Technological University's Premier Scholar's program studying Computer Science. 
            With a strong interest in design as well as coding, I hope to be able to build aesthetic web designs with a keen focus on user experience. </p>
          </motion.div>
          <motion.div
          whileInView ={{y: [100,0],opacity: [0,1]}}
          transition={{ duration: 0.5}}
          className="app__about-technologies"
          >
            <h3>Technologies</h3>
          </motion.div>
          <div className="app__about-skills">
            <motion.div
            whileInView ={{y: [100,0],opacity: [0,1]}}
            transition={{ duration: 0.5}}
            className="app__about-skillsTech"
            >
              <ul>
                <li>
                  <FaLaptopCode className='icon'/>
                  HTML/CSS
                </li>
                <li>
                  <FaLaptopCode className='icon'/>
                  Python
                </li>
                <li>
                  <FaLaptopCode className='icon'/>
                  Javascript
                </li>
                <li>
                  <FaLaptopCode className='icon'/>
                  Node.Js
                </li>
                <li>
                <FaLaptopCode className='icon'/>
                  React
                </li>
                <li>
                <FaLaptopCode className='icon'/>
                  Shopify Liquid
                </li>
              </ul>
            </motion.div>
            <motion.div
            whileInView ={{y: [100,0],opacity: [0,1]}}
            transition={{ duration: 0.5}}
            className="app__about-skillsSolution"
            >
              <ul>
                <li>
                  <MdOutlineDesignServices className='icon' />
                  Figma
                </li>
                <li>
                  <MdOutlineDesignServices className='icon' />
                  AdobeXD
                </li>
                <li>
                  <MdOutlineDesignServices className='icon' />
                  Wireframing
                </li>
                <li>
                  <MdOutlineDesignServices className='icon' />
                  UI/UX
                </li>
                <li>
                  <MdOutlineDesignServices className='icon' />
                  Prototyping
                </li>
              </ul>
            </motion.div> 
          </div>
        </div>
      </div>

    </>
    
  )
}

export default AppWrap(About,'about'); 
// export default About; 