import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper/index'
import { images } from '../../constants'
import Experience from './Experience'

import './Experiences.scss'

const Experiences = () => {
  const HDB = ['Designed UX Templates for design sprints',
  'Designed Contact Info form for businesses to update particulars',
  'Built Intranet Design System from scratch comprising > 20 components with 300 variants on Figma',
  'Developed Design System UI component library on React Storybook']

  const DSO = ['Analysed phishing campaigns as well as exploitation and post-exploitation techniques through penetration testing',
    'Tested Bitdefender Antivirus for means of exploitation']

  const BOVEM = ['Initiated and implemented migration of existing Shopify codebase to Shopify 2.0',
  'Developed new modular components and worked closely with UI Designer to implement new product pages from concept through deployment',
  'Improved SEO and site performance',
  'Set up Ecommerce tracking tools such as Google Analytics 4, Google Tag Manager, Google Ads, Google Search Console']

  return (
    <>
      <motion.div
      whileInView ={{y: [100,0],opacity: [0,1]}}
      transition={{ duration: 0}}
      className="app__experiences-header"
      >
      <h1>Experiences </h1>
      </motion.div>
      <motion.div
      whileInView ={{y: [100,0],opacity: [0,1]}}
      transition={{ duration: 0.5}}
      className="app__experiences"
      >
        <Experience 
        company="Housing Development Board"
        imageUrl={images.HDB}
        position="UXD Intern"
        date="(May 2021 - Aug 2021)"
        description={HDB}
        />
      </motion.div>
      <motion.div
      whileInView ={{y: [100,0],opacity: [0,1]}}
      transition={{ duration: 0.5}}
      className="app__experiences"
      >
        <Experience 
        company="Defense Science Organisation"
        imageUrl={images.DSO}
        position="CyberSecurity Intern"
        date="(Jun 2020 - Aug 2020)"
        description={DSO}
        />
      </motion.div>
      <motion.div
      whileInView ={{y: [100,0],opacity: [0,1]}}
      transition={{ duration: 0.5}}
      className="app__experiences"
      >
        <Experience 
        company="BOVEM"
        imageUrl={images.BOVEM}
        url='https://bovem.co'
        position="Web Developer"
        date="(Jun 2022 - Present)"
        description={BOVEM}
        />
      </motion.div>
    </>
  )
}

export default AppWrap(Experiences, 'experiences')