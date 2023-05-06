import React, { useState }  from 'react'
import './styles/StorySubmissionPage.css';
import { useNavigate } from 'react-router-dom';


const StorySubmissionPage = () => {

  let [story, setStory] = useState(null)
  let [selected, setSelected] = useState(false)
  let [promptIdx, setPromptIdx] = useState(0)

  const prompts = [
    "Your experience visiting a food pantry for the first time",
    "What you have recently received from a food assistance program",
    "Your experience interacting with the staff members",
    "How food assistance programs helped your situation"
  ]

  let navigate = useNavigate(); 

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    fetch(`/api/create/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(story)
    })

    navigate("/"); //redirect to home page
  }

  function handleChange(e) {
    const value = e.target.value
    setStory(story => ({...story, 'body': value}))
  }

  function handleFirstSelect(e){
    if (!selected) {
      e.target.value = ""
      setSelected(true)
    }
  }

  function handlePromptChange(e){
    setPromptIdx((promptIdx + 1)%prompts.length)
  }

  return (
    <div id="submission-content">
      <div id="submission-banner">
        <img id="submission-banner-bg" src="/submissionpgbg.jpg" alt="" />
        <div id='submission-banner-content'>
          <div id='submission-banner-title'>
            Tell My Story!
          </div>
        </div>
        <div className='banner-credit'>
          Photo by <a href="https://unsplash.com/@homajob?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Scott Graham</a> on <a href="https://unsplash.com/photos/OQMZwNd3ThU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </div>
      <div className="texteditor">
        <div className="prompt">
          <div className="prompt-text">{prompts[promptIdx]}</div>
          <button  className='button-9-green-inv' onClick={handlePromptChange}>
            Refresh Prompt
            <img className='refresh-icon' src="refresh-icon.svg" alt="refresh icon" />
          </button>
        </div>
        <textarea
          defaultValue="tell us your story ..."
          onChange={handleChange}
          onSelect={handleFirstSelect}
          value={story?.body}
          className='textinput'
        />
        <div className="submitbtn" >
          <button  className='button-9-green' onClick={handleSubmit}>Add My Story</button>
        </div>
      </div>
    </div>
  )
}

export default StorySubmissionPage
