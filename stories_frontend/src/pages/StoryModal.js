import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const StoryModal = ({storyId}) => {
  let navigate = useNavigate(); 

  let [story, setStory] = useState(null)

  let getStory = useCallback(async () => {
    let response = await fetch(`/api/story/${storyId}/`)
    let data = await response.json()
    setStory(data)
  }, [storyId])

  useEffect(() => {
    getStory(storyId)
  }, [ getStory, storyId ])

  function handleClose(e){
    navigate("/"); //redirect to home page
  }

  return (
    <div className="overlay">
      <div className="close">
        <button className='close-btn' onClick={handleClose}>&times;</button>
      </div>
      <div className="story-content">
        <div>{story?.body}</div>
      </div>
      <div className="btns">
        <button className='button-9'>Where can I get food?</button>
        <button className='button-9'>How can I offer help?</button>
      </div>
    </div>
  )
}

export default StoryModal
