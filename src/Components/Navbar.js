import React from 'react'
import PropTypes from 'prop-types'
// import Pallete from './Pallete'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`} aria-label="Main navigation">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color: props.mode === 'light' ? "black": "#03628f"}}>{props.title}</Link>
        <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{color: props.mode === 'light' ? "black": "#404c52"}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color: props.mode === 'light' ? "black": "#404c52"}}>{props.about}</Link>
            </li>
          </ul>
        </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}

          {/* Dark Mode Switch */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark':'light'} mode</label>
          </div>

          {/* Dark Mode Pallete */}
          {/* <div>
            <Pallete/>
          </div> */}
    </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Set Title Here',
  about: 'Set About'
}
