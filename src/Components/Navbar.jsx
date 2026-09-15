import React from 'react'
import { Link } from 'react-router-dom'
import { FcPaid } from "react-icons/fc"
import { FcHome } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <Link to="/" className='navbar-brand'>Buy-Fit</Link>
            <div className="navbar-links">
                <Link to="/" className='navbar-link'>  Home </Link>
                <Link to="/Checkout" className='navbar-link'>  Cart </Link>
            </div>
            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <Link to="/auth" className='btn btn-secondary'> Login </Link>
                    <Link to="/auth" className='btn btn-primary'> Signup</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar