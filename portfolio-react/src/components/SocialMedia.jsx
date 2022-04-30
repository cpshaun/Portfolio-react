import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href="https://www.linkedin.com/in/Chua-Peng-Shaun" target="_blank" rel="noreferrer" className="app__social-linkedin">
              <BsGithub />
            </a>
        </div>
        <div>
            <a href="https://github.com/cpshaun" target="_blank" rel="noreferrer" className="app__social-github">
              <BsLinkedin />
            </a>
        </div>
    </div>
  )
}

export default SocialMedia