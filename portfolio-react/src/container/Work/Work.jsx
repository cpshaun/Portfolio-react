import React, { useState, useEffect } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client' 

import './Work.scss'

const Work = () => {
  const [activeFilter,setActiveFilter] = useState('All');
  const [animateCard,setAnimateCard] = useState({ y:0, opacity:1});
  const [works,setWorks] = useState([]);
  const [filterWork,setFilterWork] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })

    console.log(works)
  },[])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);

    setTimeout(() => {
      setAnimateCard([{y:0,opacity:1}]);
      
      setFilterWork(works.filter((work)=> work.tags.includes(item)))
    },500);

  }
  return (
    <>
      <motion.div
        whileInView ={{y: [100,0],opacity: [0,1]}}
        transition={{ duration: 0}}
        className="app__works-header"
      >
        <h1>Works</h1>
      </motion.div>
      <div className="app__works-filter app__flex">
        {['UI/UX', 'CLI','ReactJS','Python','Web Dev','All'].map((item,index) => (
          <div 
            key={index}
            onClick = {() => handleWorkFilter(item)}
            className = {`app__work-filter-item ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className="app__works-portfolio"
      >
        {filterWork.map((work,index) => (
           <motion.div
            whileInView ={{y: [100,0],opacity: [0,1]}}
            transition={{ duration: 0.5}}
            className="app__work-item app__flex" key={index}>
             <div className="app__work-img app__flex">
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                whileHover={{opacity:[0,1]}}
                transition={{ duration: 0.25, ease:'easeInOut' ,staggerChildren:'0.5'}}
                className = "app__work-hover app__flex"
                >
                  <p className="app__work-description">{work.description}</p>
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                    whileInView={{scale:[0.5,0.8]}}
                    whileHover={{scale:[0.8,1.2],opacity:[1,0.9]}}
                    transition={{ duration: 0.25}}
                    className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                </motion.div>
             </div>
             <div className="app__work-content app__flex">
                <h4 className="app__work-title">{work.title}</h4>
                <div className="app__work-tag app__flex">
                  {/* <p>{work.tags[0]}</p> */}
                  <p>{work.tags.slice(0,-1).join(' , ')}</p>
                </div>
             </div>
           </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work,'work');