import React from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = ({projectDetails}) => {
  const {imageUrl, projectTitle, description, projectUrl, duration, tagsList} =
    projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-and-duration">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      {tagsList && (
        <div className="tags-list">
          <p className="tags-heading">Tags:</p>
          <ul className="tags-ul">
            {tagsList.map(tag => (
              <li key={tag.id} className="tag-item">
                <p className="tag-name">{tag.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
