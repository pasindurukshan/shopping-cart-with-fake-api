import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    
    const cart = JSON.parse(localStorage.getItem("cart")) || []

  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">Zone 24x7</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex">
                <input className="form-control" type="search" style={{width: '700px'}} placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success ms-1" type="submit">Search</button>
            </form>
            
            
            <div className='buttons'>
                <NavLink to="/login" className='btn btn-outline-dark ms-5'>
                <i className='fa fa-sign-in me-1'> </i> Login
                </NavLink>
                <NavLink to="/signup" className='btn btn-outline-dark ms-2'>
                <i className='fa fa-user-plus me-1 '> </i> Register
                </NavLink>
                <NavLink to="/cart" className='btn btn-outline-dark ms-2'>
                              <i className='fa fa-cart-plus me-1'> </i> Cart ({ cart.length})
                </NavLink>
            </div>
            
            
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar;
