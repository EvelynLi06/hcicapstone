import React, {useState, useEffect} from 'react'
import StoryItem from '../components/StoryItem'
import { useParams, useNavigate } from 'react-router-dom';
import './styles/HomePage.css';
import StoryModal from './StoryModal';

const HomePage = () => {
  let [stories, setStories] = useState([])
  let { id } = useParams()

  let navigate = useNavigate(); 
  const navigateCreate = () =>{ 
    let path = "/create"; 
    navigate(path);
  }

  const navigateRead = () => {
    let randomId = Math.floor(Math.random() * (stories.length)) + 1;
    let path = "/story/" + randomId; 
    navigate(path);
  }

  useEffect(() => {
    getStories()
  }, [])
  
  let getStories = async () => {
    let response = await fetch('/api/stories/')
    let data = await response.json()
    setStories(data)
  }

  return (
    <div className="page-content">
      {
        id !== undefined ? <StoryModal storyId={id} /> : <></>
      }
      <div className='home-content'>
        <div id="home-banner">
          <div id='home-banner-content'>
            <div id='home-banner-title'>
              Read a story, and tell yours!
            </div>
            <div id="home-banner-text">What was the last time you volunteered or received assistance at a food pantry? Do you want to find out what food assistance and food insecurity is like for different people? </div>
            <div id="home-banner-btns">
              <button className='button-9' onClick={navigateRead}>Read A Story</button>
              <button className='button-9' onClick={navigateCreate}>Tell My Story</button>
            </div>
          </div>
          <div className='home-banner-credit'>
            Photo by <a href="https://unsplash.com/@adoucett?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Doucett</a> on <a href="https://unsplash.com/photos/HkbeLxOJlqk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
          <img id="home-banner-bg" src="/homepgbg.jpg" alt="" />
        </div>

        <div className="stories-gallery">
          {stories.map((story, index) => (
            <StoryItem className="story-box" key={index} story={story} />
          ))}
        </div>
        
        <div className='loadMoreBtn'>
          <button className='button-9'>Load More</button>
        </div>
        
      </div>

    </div>
    
  )
}

export default HomePage
