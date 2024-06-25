import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({courseDetails}) => {
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="title-and-duration">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li key={tag.id} className="tag-item">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
