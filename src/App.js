import React from 'react'
import "./App.css"
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <header className="main-header">
        <div className="header-flex">
          <div className="header-logo-area">
            <img src={require("./assets/LOGO3.png")} alt="hospital logo" className="hospital-logo-large" />
          </div>
          <div className="header-title-area">
            <span className="hospital-header-title">Modern Life Hospital</span>
          </div>
        </div>
        <div className="header-bottom-white">
          <span className="system-title-small">Appointment Management System </span>
        </div>
      </header>
      <div className="container">
        <Home/>
      </div>
    </>
  )
}

export default App
