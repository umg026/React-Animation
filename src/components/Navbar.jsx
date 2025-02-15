import React from 'react'

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <h1>
            <a className="logo-title navbar-brand text-white fw-bold" href="#">TattoWale</a>
            </h1>
            {/* Mobile Menu Button */}
            <button className="navbar-toggler mobile-menu bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
              <span className="navbar-toggler-icon" />
            </button>
            {/* Desktop Menu */}
            <div className="collapse navbar-collapse desktop-nav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Categories</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Why Us</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Gallery</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Offcanvas Mobile Menu */}
        <div className="offcanvas offcanvas-start" id="mobileMenu">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title logo-title">TattoWale</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Categories</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Why Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Gallery</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}
