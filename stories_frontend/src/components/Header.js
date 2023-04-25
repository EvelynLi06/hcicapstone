import React from 'react'
import './styles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  let navigate = useNavigate(); 

  const navigateCreate = () =>{ 
    let path = "/create"; 
    navigate(path);
  }

  const navigateHome = () =>{ 
    let path = "/"; 
    navigate(path);
  }

  return (
    <div id='header'>
      <div className="M header-name">Stories at FindFood.Guide</div>
      <div className="M" id='nav-menu'>
        <div className="header-nav" onClick={navigateHome}>HOME</div>
        <div className="header-nav" onClick={navigateCreate}>SHARE</div>
        <div className="header-nav">GET FOOD</div>
        <div className="header-nav">OFFER HELP</div>
      </div>
    </div>
  )
}

export default Header
