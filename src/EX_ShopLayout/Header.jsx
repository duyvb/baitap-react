import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
        <div className="container-fluid" >
          <a href="#" className="navbar-brand">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#myMenu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="myMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>  
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>  
  );
}
