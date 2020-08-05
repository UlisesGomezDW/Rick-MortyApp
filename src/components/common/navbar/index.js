import React from 'react'
import {useLocation} from 'react-router-dom'
import back from './../../../assets/icons/back-white.svg'
import './index.scss'

const Navbar = () => {
  const location = useLocation()
  return(
    <nav className="navbar">
      {location.pathname !== '/' ? <img src={back} alt="back" onClick={()=>window.history.back()}/> : null}
      <p>Logo</p>
    </nav>
  )
}

export default Navbar