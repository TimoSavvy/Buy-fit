
import { Link } from 'react-router-dom'

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const { getCartQuantity } = useCart()



   const total = getCartQuantity();

    
  return (
    <div className='navbar'>
        <div className="navbar-container">
            <Link to="/" className='navbar-brand'>Buy-Fit</Link>
            <div className="navbar-auth show">
               {!user ? (<div className="navbar-auth-links">
                <Link to="/auth" className='btn btn-secondary'> Log in</Link>
                   <Link to="/auth" className='btn btn-primary'> Sign up </Link>

                </div>) : (
                    <div className="navbar-user">
                        <span className='navbar-greeting' > Hello {user.email} </span>
                        <button className='btn btn-secondary' onClick={logout}>Log out</button>
                    </div>
                ) }  
            </div>
            <div className="navbar-links">
                <Link to="/" className='navbar-link'>  Home </Link>
                <Link to="/Checkout" className='navbar-link'>  Cart <span className='cart-nav'> ( ${total.toFixed(2)} )</span></Link>
            </div>
            <div className="navbar-auth no-show">
               {!user ? (<div className="navbar-auth-links">
                   <Link to="/auth" className='btn btn-primary'> Sign up </Link>
                   <Link to="/auth" className='btn btn-secondary'> Log in</Link>
                </div>) : (
                    <div className="navbar-user">
                        <span className='navbar-greeting' > Hello {user.email} </span>
                        <button className='btn btn-secondary' onClick={logout}>Log out</button>
                    </div>
                ) }  
            </div>
        </div>
    </div>
  )
}

export default Navbar