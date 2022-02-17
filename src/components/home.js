import React from 'react';
import mobile from '../assets/images/mobile-solution.png';
import '../css/home.css';
import { Button } from './button';
import Projects from './home/projects';
import Services from './home/services';

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="banner-container">
          <div className="tag-line-div">
            <h1>
              <b>Digital Health</b> Innovations for Development in Tanzania
            </h1>
            <div className="tag-line-section-2">
              <div className="tag-line-section-2-div-2">
                <p className="faded-paragraph">
                  To use digital health innovations and solutions to support the
                  provision of quality and sustainable health care services to
                  all Tanzanians so that they can effectively participate in
                  sustainable industrial and social development.
                </p>
                <Button buttonStyle="btn-outline" navigationUrl="/#/projects">
                  Projects
                </Button>
              </div>
            </div>
          </div>
          <div className="banner-img">
            <img src={mobile} alt="Mobile Solutions" className="tag-d-image" />
          </div>
        </div>
      </div>
      <Projects />
      <Services />
    </>
  );
};
