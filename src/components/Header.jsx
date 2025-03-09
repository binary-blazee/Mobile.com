import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from '../assets/images/search-svgrepo-com.svg';
import Login from './Login';

function Header() {
  const location = useLocation();
  const [login, setLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('status');
    setLoggedIn(status === 'Access Granted');
  }, []);

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('status');
    setLoggedIn(false);
  };

  return (
    <>
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex space-x-6 font-medium">
            <Link to="/" className={location.pathname === '/' ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}>
              Home
            </Link>
            <Link to="/shop" className={location.pathname === '/shop' ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}>
              Shop All
            </Link>
            <Link to="/blog" className={location.pathname === '/blog' ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}>
              Blog
            </Link>
          </nav>
          <div className="text-xl font-bold text-red-500">
            <span className="text-black">MOBILE.COM</span>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <Link to="/about" className={location.pathname === '/about' ? 'text-red-500' : 'text-gray-700 hover:text-red-500'}>
              About Us
            </Link>
            {location.pathname === '/shop' && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="border rounded-full px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="absolute right-3 top-2 text-gray-500">
                  <img src={Search} alt="Search" className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            )}
            {loggedIn && <button className='cursor-pointer'><Link to={'/cart'}>Cart</Link></button>}
            {!loggedIn ? (
              <button
                className="bg-[#fc2c36] px-3 py-1 rounded cursor-pointer text-white"
                onClick={() => setLogin(true)}
              >
                Login
              </button>
            ) : (
              <button
                className="bg-gray-500 px-3 py-1 rounded cursor-pointer text-white"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      {login && <Login onClose={() => {
        setLogin(false);
        setLoggedIn(localStorage.getItem('status') === 'Access Granted'); 
      }} />}
    </>
  );
}

export default Header;
