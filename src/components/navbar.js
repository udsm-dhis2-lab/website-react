import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../css/navbar.css';
import { Button } from './button';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div>
            <NavLink to="/" onClick={closeMobileMenu} className="navbar-logo">
              <img src={logo} alt="logo" width={50} height={50} />
              <p>UDSM DHIS2 Project™</p>
            </NavLink>
          </div>
          <div>
            <button onClick={handleOpen} className="menu-icon">
              {open ? (
                <FaTimes className="icon" />
              ) : (
                <FaBars className="icon" />
              )}
            </button>
            <ul className={open ? 'open' : ''}>
              <li className="nav-item">
                <NavLink
                  activeclassname="active"
                  to="/"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-links"
                  activeclassname="active"
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/team"
                  className="nav-links"
                  activeclassname="active"
                  onClick={closeMobileMenu}
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/publications"
                  className="nav-links"
                  activeclassname="active"
                  onClick={closeMobileMenu}
                >
                  Publications
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className="nav-links"
                  activeclassname="active"
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/innovations"
                  className="nav-links"
                  activeclassname="active"
                  onClick={closeMobileMenu}
                >
                  Innovations
                </NavLink>
              </li>
              <li className="nav-item nav-item-mobile">
                <NavLink
                  activeclassname="active"
                  to="/club"
                  className="nav-links"
                  activeclassname="active"
                  onClick={closeMobileMenu}
                >
                  DHIS2 Club
                </NavLink>
              </li>
              <li className="nav-item-desktop">
                <Button buttonStyle="btn-outline" navigationUrl="/club">
                  DHIS2 Club
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
