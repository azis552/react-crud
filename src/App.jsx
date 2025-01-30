// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Link } from 'react-router-dom';
import { Routes } from './routes'

export default function App() {
  return(
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container">
            <Link to="/" className="navbar-brand">Home</Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSuportedContent" 
              aria-controls="navbarSuportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
            </button>

            <div className="collapse navbar-collapse" 
              id='navbarSuportedContent' >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/posts" className="nav-link">Posts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes />
    </>
  )
}

