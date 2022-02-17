import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../css/navbar.css';
import { Button } from './button';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div>
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" width={50} height={50} />
              <p>UDSM DHIS2 Project™</p>
            </Link>
          </div>
          <div>
            <ul>
              <li className="menu-icon" onClick={handleClick}>
                <p>{click ? <FaTimes /> : <FaBars />}</p>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#/team"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#/publications"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Publications
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#/innovations"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Innovations
                </Link>
              </li>
              {!button && (
                <li className="nav-item">
                  <Link
                    to="/#/club"
                    className="nav-links-mobile"
                    onClick={closeMobileMenu}
                  >
                    DHIS2 Club
                  </Link>
                </li>
              )}
              {button && (
                <Button buttonStyle="btn-outline" navigationUrl="/#/club">
                  DHIS2 Club
                </Button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
