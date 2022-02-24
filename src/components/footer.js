import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import '../css/footer.css';

const social = [
  {
    url: 'https://linkedin.com/in',
    icon: <FaLinkedinIn className="icon" />,
  },
  {
    url: 'https://twitter.com',
    icon: <FaTwitter className="icon" />,
  },
  {
    url: 'https://instagram.com',
    icon: <FaInstagram className="icon" />,
  },
  {
    url: 'https://facebook.com',
    icon: <FaFacebookF className="icon" />,
  },
  {
    url: 'https://youtube.com',
    icon: <FaYoutube className="icon" />,
  },
  {
    url: 'https://github.com',
    icon: <AiOutlineGithub className="icon" />,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="container">
          <ul>
            {social?.map(({ url, icon }) => (
              <li key={url}>
                <a href={url}>{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="locations">
        <div className="container">
          <p>College of Information and Communication Technologies(CoICT)</p>
          <p>Department of Computer Science and Engineering(DCSE)</p>
          <p>DHIS2 Office(HUB) - Block B - Room No. B108</p>
        </div>
      </div>
      <div className="links">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
              <li>
                <Link to="/">Teams</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <p>
            <img src={logo} alt="logo" /> UDSM DHIS2 Project™ &copy; 2015-2022.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
