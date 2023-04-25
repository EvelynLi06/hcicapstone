import React from 'react'
import './styles/StoryItem.css';
import Tag from './Tag'
import { useNavigate } from 'react-router-dom';


const StoryItem = ({story}) => {
  let navigate = useNavigate(); 

  const handleReadStory = () => {
    navigate("/story/" + story.id);
  }

  return (
    <div className='storyItem'>
      <Tag text={story.tag}/>

      <hr />

      <div className="story-content">{story.preview_body}</div>

      <hr />

      <div className="infos"> 
        <div className="time">2 min read</div>
        <button className='readBtn' onClick={handleReadStory}>Read Story</button>
      </div>
    </div>
  )
}

export default StoryItem
