import React, { useState } from 'react'
import { HiOutlineMailOpen, HiOutlineMail } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { client } from '../../client';

import './Contact.scss';

const Contact = () => {
  const [formData,setFormData] = useState({name: '', email: '',message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading,setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e)=> {
    const { name,value } = e.target;

    setFormData({...formData, [name]:value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }
  return (
    <>
      <div className="app__contact-header">
        <h1>
          Contact
        </h1>
      </div>
      <div className="app__contact app__flex">
        <motion.div
          whileInView ={{y: [100,0],opacity: [0,1]}}
          transition={{ duration: 0.5}}
          className="app__contact-message"
        >
          <p>
            Let's chat
          </p>
          <a href="mailto: pchua014@e.ntu.edu.sg" className="email app__flex">
            <MdAlternateEmail />
            pchua014@e.ntu.edu.sg
          </a>
        </motion.div>
        <motion.div
          whileInView ={{y: [100,0],opacity: [0,1]}}
          transition={{ duration: 1}}
          className="app__contact-message"
        >
          <p>
            Or just say hi :)
          </p>
        </motion.div>
        {!isFormSubmitted ?
          <div className="app__contact-form app__flex">
            <div className="app__flex">
              <input type="text" name="name" placeholder="Your Name" value={name} onChange={handleChangeInput} className="p-text" />
            </div>
            <div className="app__flex">
              <input type="text" name="email" placeholder="Your Email" value={email} onChange={handleChangeInput} className="p-text" />
            </div>
            <div>
              <textarea name="message" placeholder="Your Message" value={message} onChange={handleChangeInput} className="p-text"></textarea>
            </div>
            <button className="p-send" onClick={handleSubmit}>
              {loading ? 
                <div className="p-sending">
                  <motion.div
                    whileInView ={{y:[1,1],x: [-80,40],opacity: [0,1.5,0]}}
                    transition={{ duration: 1, type:'tween'}}
                  >
                    <IoIosSend />
                  </motion.div>
                  <motion.div
                    whileInView ={{y:[0,0],x:[18,18],opacity: [1,0]}}
                    transition={{ duration: 1.5}}
                  >
                    <HiOutlineMailOpen/>
                  </motion.div>
                  <motion.div
                    whileInView ={{y:[1,1],x:[-3,-3],opacity: [0,1]}}
                    transition={{ duration: 2}}
                  >
                    <HiOutlineMail/>
                  </motion.div>
              </div>
              : 'Send'
              }
            </button>
          </div>
          : <div>
            <h3 className="head-text">
              Thanks for getting in touch!
            </h3>
          </div>}
      </div>
      <p className="copyright app__flex"> Built by Chua Peng Shaun. </p>
    </>
  )
}

export default AppWrap( Contact,'contact');