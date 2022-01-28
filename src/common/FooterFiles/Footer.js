import React from 'react'
import { Link } from 'react-router-dom'

function Footer(){
  return (
    <footer className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/about" className="nav-item">
        About 
        </Link>
        <Link to="/Tallinn" className="nav-item">
        Tallinn
        </Link> 
      </div>
    </footer>
  )
}

export default Footer