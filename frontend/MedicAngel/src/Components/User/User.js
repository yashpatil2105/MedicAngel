import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


function User() {
  // console.log('999999999999999');
  const loggedIn = true;

  return (
    <div>
      {console.log('loggedIn', loggedIn)}
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a className='navbar-brand' href='http://www.developers.com'>
              www.developers.com
            </a>
          </div>
          <ul className='navbar-nav'>
            <li>
              {loggedIn && (
                <Link className='nav-link' to='/login'>
                  Home
                </Link>
              )}
            </li>
            <li>
              {loggedIn && (
                <Link className='nav-link' to='/todos'>
                  ToDos
                </Link>
              )}
            </li>
          </ul>
          <ul className='navbar-nav navbar-collapse justify-content-end'>
            <li>
              {!loggedIn && (
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              )}
            </li>
            <li>
              {loggedIn && (
                <Link
                  className='nav-link'
                  to='/logout'
  
                >
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default withRouter(User);
