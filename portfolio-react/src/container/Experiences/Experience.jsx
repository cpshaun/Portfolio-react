import React from 'react'
import './Experience.scss'

const Experience = ({company, position, date, imageUrl, description }) => {
    const descriptions = description.map((description,index) => <li key={index}>{description}</li>)

    return (
    <div className="app__experience">
        <h2>
            {company}
        </h2>
        <div className="app__experience-container">
            <div className="app__experience-details">
                <img src={imageUrl} alt ={company}/>
                <h3>
                    {position}
                </h3>
                <p>
                    {date}
                </p>
            </div>
            <div className="app__experience-descriptions">
                <ul >
                    {descriptions}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience