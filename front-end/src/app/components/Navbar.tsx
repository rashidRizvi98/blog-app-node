"use client"; 
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function AppNavbar () {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=> {
    setLoggedIn(!!Cookies.get('blog-app-session'))
  },[loggedIn]);

  const handleSignout = async () => {
    try {
      Cookies.remove('blog-app-session');
      setLoggedIn(false);
    } catch (error) {
      
    }
  }

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="/">
            My Blog App
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/blogs/my">
                  My Blogs
                </Link>
              </li>
              {
                loggedIn  ?
                <li className="nav-item">
                  <button className="nav-link" onClick={handleSignout} >
                    Sign out
                  </button>
                </li> :
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="/login">
                      Sign in
                    </Link>   
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/register">
                      Sign up
                    </Link>   
                  </li>
                </>
              }              
            </ul>
          </div>
        </div>
      </nav>
    );
  };