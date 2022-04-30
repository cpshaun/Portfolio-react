import React from 'react';
import Typewriter from 'typewriter-effect';

import './Hero.scss'



const Hero = () => {
  return (
      <div className="app__hero">
        {/* <p className="app__hero-text "id="intro-text"></p> */}
        <div className="app__hero-container">
          <Typewriter
          options = {{
            cursor: '',
            strings: ["Hi there, I'm Shaun."],
            autoStart: true,
            loop:true,
            wrapperClassName: 'app__hero-text',
          }}
          />
          </div>
      </div>
      // {/* <img src= {images.Snowman} alt="Logo"/> */}
      // {/* <motion.div
      //   whileInView={{ x: [-100,0 ], opacity: [0,1] }}
      //   transition={{ duration: 0.5 }}
      //   className="app__hero-info"
      // >
        
      // </motion.div> */}
  )
}

export default Hero;