import React from 'react'
import { Link,useLocation } from 'react-router-dom'
const Navbar = () => {
/* A hook that returns the current location. */
  let location = useLocation();
  return (
    <nav className="navbar navbar-dark navbar-expand-lg sticky-top" style={{background:'rgb(229 131 59)'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/mynotebook">MyNotes</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/home' ? "active" : ''}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === '/about' ? "active" : ''}`} to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link to='/login' className='btn text-white'>Login</Link>
        <Link to='/signup' className='btn text-white'>Sign Up</Link>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar